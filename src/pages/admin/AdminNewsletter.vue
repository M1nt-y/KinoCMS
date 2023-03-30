<template>
  <div class="newsletter" >
    <TheLoading v-show="newsletterStore.loading" />
    <DeleteModal
        @confirmDeletion="newsletterStore.deleteTemplate(templateID)"
        @closeModal="newsletterStore.showModal = false"
        v-if="newsletterStore.showModal"
    />
    <div class="newsletter__wrapper">
      <h2>SMS</h2>
      <div class="newsletter__radio">
        <p>Choose</p>
        <input type="radio" id="smsAll" value="All" v-model="newsletterStore.smsPicked" />
        <label for="smsAll">All users</label>
        <input type="radio" id="smsSelect" value="Select" v-model="newsletterStore.smsPicked" />
        <label for="smsSelect">Selectively</label>
        <router-link
            :to="{
              name: 'ChooseUsers',
              params: {
                id: 'sms',
              }
            }"
            v-if="newsletterStore.smsPicked === 'Select'"
        >
          Select users
        </router-link>
      </div>
      <div class="newsletter__content">
        <div class="newsletter__content-column">
          <div class="newsletter__content-item">
            <p>SMS text</p>
            <p>Symbols: {{ characterCount }}</p>
          </div>
          <textarea
              class="form-control"
              v-model="smsContent"
              :disabled="smsDisabled"
          />
        </div>
        <div class="newsletter__content-column">
          <p>SMS count: {{ smsCount }}</p>
          <p>SMS sent: {{ smsSent }} ({{ smsPercentage }}%) </p>
        </div>
      </div>
      <button class="btn btn-primary" @click="sendSms">Start</button>
    </div>
    <div class="newsletter__wrapper">
      <h2>Email</h2>
      <div class="newsletter__radio">
        <p>Choose</p>
        <input type="radio" id="emailAll" value="All" v-model="newsletterStore.emailPicked" />
        <label for="emailAll">All users</label>
        <input type="radio" id="emailSelect" value="Select" v-model="newsletterStore.emailPicked" />
        <label for="emailSelect">Selectively</label>
        <router-link
            :to="{
              name: 'ChooseUsers',
              params: {
                id: 'email',
              }
            }"
            v-if="newsletterStore.emailPicked === 'Select'"
        >
          Select users
        </router-link>
      </div>
      <div class="newsletter__content">
        <div class="newsletter__content-column">
          <label>
            <span>Upload HTML letter</span>
            <input class="newsletter__content-input" type="file" accept="text/html" @change="templateSelected($event)">
          </label>
          <p>Uploaded file: {{ fileName }}</p>
          <p>Chosen template in current newsletter: {{ templateName }}</p>
          <p>Emails count: {{ emailCount }}</p>
          <p>Emails sent: {{ emailSent }} ({{ emailPercentage }}%)</p>
        </div>
        <div class="newsletter__content-column">
          <div class="newsletter__content-wrapper">
            <h5>List of latest uploaded newsletter templates</h5>
            <div class="newsletter__content-templates" v-if="newsletterStore.templateList.length>0">
              <div class="newsletter__content-template" v-for="template in newsletterStore.templateList" :key="template.id">
                <label>
                  <input type="radio" :value="template.name" v-model="newsletterStore.templatePicked">
                  <span>{{ template.fileName }}</span>
                </label>
                <p @click="toggleModal(template.id)">Delete</p>
              </div>
            </div>
            <p v-else>No uploaded templates</p>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="sendEmail">Start</button>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useUsersStore} from "@/stores/users";
import {useNewsletterStore} from "@/stores/newsletter";
import TheLoading from "@/components/admin/TheLoading";
import DeleteModal from "@/components/admin/DeleteModal";


const usersStore = useUsersStore();
const newsletterStore = useNewsletterStore();
usersStore.getUsers();
newsletterStore.getTemplates();


const smsCount = computed(() => {
  if (newsletterStore.smsPicked === 'All') {
    return usersStore.usersList.length;
  }
  else {
    return newsletterStore.smsUsers.length
  }
});
const smsContent = ref('');
const characterCount = computed(() => {
  return smsContent.value.length;
});
const smsSent = ref(0);
const smsPercentage = ref(0);
const smsDisabled = ref(false);
async function sendSms() {
  if (smsCount.value !== 0 && smsContent.value !== '') {
    smsSent.value = smsPercentage.value = 0;
    smsDisabled.value = true;
    for (let i = 0; i < smsCount.value; i++) {
      smsSent.value++;
      smsPercentage.value = Math.ceil(smsSent.value / smsCount.value * 100);
      await new Promise(r => setTimeout(r, 100));
    }
    smsDisabled.value = false;
  }
}

const fileName = ref('');
function templateSelected(input) {
  let file = input.target.files[0];
  fileName.value = file.name;
  if (newsletterStore.templateList.length === 5) {
    newsletterStore.deleteTemplate(0);
  }
  newsletterStore.templateList.push({
    id: newsletterStore.templateList.length,
    name: 'template-' + Date.now(),
    uploaded: false,
    fileName: file.name,
    file: file
  });
}

let templateID = null;
function toggleModal(id) {
  newsletterStore.showModal = true;
  templateID = id;
}

const templateName = computed(() => {
  let fileName = '';
  if (newsletterStore.templatePicked !== '') {
    newsletterStore.templateList.forEach((template) => {
      if (template.name === newsletterStore.templatePicked) {
        fileName = template.fileName
      }
    })
  }
  return fileName
})

const emailCount = computed(() => {
  if (newsletterStore.emailPicked === 'All') {
    return usersStore.usersList.length;
  }
  else {
    return newsletterStore.emailUsers.length;
  }
});
const emailSent = ref(0);
const emailPercentage = ref(0);
async function sendEmail() {
  if (emailCount.value !== 0 && newsletterStore.emailPicked !== '') {
    newsletterStore.uploadTemplates();
    emailSent.value = emailPercentage.value = 0;
    for (let i = 0; i < emailCount.value; i++) {
      emailSent.value++;
      emailPercentage.value = Math.ceil(emailSent.value / emailCount.value * 100);
      await new Promise(r => setTimeout(r, 100));
    }
  }
}


</script>

<script>
export default {
  name: "AdminNewsletter",
}
</script>

<style scoped>
.newsletter {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.newsletter__wrapper {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.newsletter__radio {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.newsletter__content {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}
.newsletter__content-column {
  width: 50%;
}
.newsletter__content-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.newsletter__content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 20px;
  gap: 10px;
}
.newsletter__content-input {
  display: none;
}
.newsletter__content-templates {
  width: 100%;
}
.newsletter__content-template {
  display: flex;
  justify-content: space-between;
}

p, label {
  margin: 0;
}
</style>
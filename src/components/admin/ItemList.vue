<template>
  <div class="list">
    <DeleteModal
        @confirmDeletion="deleteItem"
        @closeModal="emit('closeModal')"
        v-if="showModal"
    />
    <div class="list__content" v-if="items.length > 0">
      <table class="table table-bordered table-striped" v-if="routeName === 'User'">
        <thead>
        <tr>
          <th v-if="$route.name === 'ChooseUsers'">
<!--            <input type="checkbox"  /> &lt;!&ndash;no v-model&ndash;&gt;-->
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="checkbox" v-model="checkedId" />
            <label for="checkbox" @click="selectColumn($event.target.innerText.toLowerCase())">ID</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="registration" v-model="checkedRegistration" />
            <label for="registration" @click="selectColumn($event.target.innerText.toLowerCase())">Registration date</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="birthday" v-model="checkedBirthday" />
            <label for="birthday" @click="selectColumn($event.target.innerText.toLowerCase())">Birthday</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="email" v-model="checkedEmail" />
            <label for="email" @click="selectColumn($event.target.innerText.toLowerCase())">Email</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="phone" v-model="checkedPhone" />
            <label for="phone" @click="selectColumn($event.target.innerText.toLowerCase())">Phone number</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="fullname" v-model="checkedFullname" />
            <label for="fullname" @click="selectColumn($event.target.innerText.toLowerCase())">Full name</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="username" v-model="checkedUsername" />
            <label for="username" @click="selectColumn($event.target.innerText.toLowerCase())">Username</label>
          </th>
          <th class="table__item table__column">
            <input class="table__item-input" type="checkbox" id="city" v-model="checkedCity" />
            <label for="city" @click="selectColumn($event.target.innerText.toLowerCase())">City</label>
          </th>
          <th v-if="$route.name !== 'ChooseUsers'"></th>
          <th v-if="$route.name !== 'ChooseUsers'"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-if="$route.name === 'ChooseUsers'">
            <input type="checkbox" :value="item.name" v-model="newsletterStore.smsUsers" v-if="$route.params.id === 'sms'" />
            <input type="checkbox" :value="item.name" v-model="newsletterStore.emailUsers" v-else />
          </td>
          <td class="table__item">{{ item.id }}</td>
          <td class="table__item">{{ item.registrationDate }}</td>
          <td class="table__item">
            <span v-if="item.birthday !== ''">
              {{ new Date(item.birthday).toISOString().split('T')[0] }}
            </span>
          </td>
          <td class="table__item">{{ item.email }}</td>
          <td class="table__item">{{ item.phone }}</td>
          <td class="table__item">{{ item.fullName }}</td>
          <td class="table__item">{{ item.username }}</td>
          <td class="table__item">{{ item.city }}</td>
          <td class="table__item" v-if="$route.name !== 'ChooseUsers'">
            <div class="list__item-edit">
              <router-link :to="{
                  name: routeName,
                  params: {
                    id: Number(item.id),
                    parent: parent
                  }
                }"
              >
                <span>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z" stroke="#000000"/>
                    <path d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z" stroke="#000000"/>
                  </svg>
                </span>
              </router-link>
            </div>
          </td>
          <td class="table__item" v-if="$route.name !== 'ChooseUsers'">
            <div class="list__item-delete" @click="toggleModal(item.id)" v-if="item.id !== 'default'">
              <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-576.000000, -192.000000)" fill-rule="nonzero">
                    <g transform="translate(576.000000, 192.000000)">
                      <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero" />
                      <path d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z" id="形状" fill="#09244B" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <table class="table table-bordered table-striped" v-else>
        <thead>
        <tr>
          <th class="table__item">Name</th>
          <th class="table__item">Creation date</th>
          <th class="table__item" v-if="status">Status</th>
          <th class="table__item"></th>
          <th class="table__item"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="table__item">{{ item.name }}</td>
          <td class="table__item">{{ new Date(item.creationDate).toISOString().replace('T', ' ').replace(/\.\d+Z/,'') }}</td>
          <td class="table__item" v-if="status">{{ item.status }}</td>
          <td class="table__item">
            <div class="list__item-edit">
              <router-link :to="{
                name: routeName,
                params: {
                  id: index,
                  parent: parent
                }
              }">
            <span>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z" stroke="#000000"/>
                <path d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z" stroke="#000000"/>
              </svg>
            </span>
              </router-link>
            </div>
          </td>
          <td class="table__item">
            <div class="list__item-delete" @click="toggleModal(item.id)" v-if="item.id !== 'default'">
              <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-576.000000, -192.000000)" fill-rule="nonzero">
                    <g transform="translate(576.000000, 192.000000)">
                      <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero" />
                      <path d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z" id="形状" fill="#09244B" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No items available</p>
    <button class="btn btn-default" @click="addItem" v-if="routeName !== 'User'">Add</button>
  </div>
</template>

<script setup>
import DeleteModal from "@/components/admin/DeleteModal";
import {ref} from "vue";
import {useNewsletterStore} from "@/stores/newsletter";


const newsletterStore = useNewsletterStore();

defineProps({
  routeName: {
    type: String,
    default: null
  },
  items: {
    type: Array,
    default: () => []
  },
  parent: {
    type: String,
    default: '0'
  },
  status: {
    type: Boolean,
    default: false
  },
  showModal: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['addItem', 'deleteItem', 'toggleModal', 'closeModal', 'sortArray']);

const checkedId = ref(false);
const checkedRegistration = ref(false);
const checkedBirthday = ref(false);
const checkedEmail = ref(false);
const checkedPhone = ref(false);
const checkedFullname = ref(false);
const checkedUsername = ref(false);
const checkedCity = ref(false);

function selectColumn(column) {
  if (column.includes('registration')) {
    checkedId.value = checkedBirthday.value = checkedEmail.value = checkedPhone.value = checkedFullname.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'registrationDate', checkedRegistration.value)
  }
  else if (column.includes('birthday')) {
    checkedId.value = checkedRegistration.value = checkedEmail.value = checkedPhone.value = checkedFullname.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'birthday', checkedBirthday.value)
  }
  else if (column.includes('email')) {
    checkedId.value = checkedRegistration.value = checkedBirthday.value = checkedPhone.value = checkedFullname.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'email', checkedEmail.value)
  }
  else if (column.includes('phone')) {
    checkedId.value = checkedRegistration.value = checkedBirthday.value = checkedEmail.value = checkedFullname.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'phone', checkedPhone.value)
  }
  else if (column.includes('full')) {
    checkedId.value = checkedRegistration.value = checkedBirthday.value = checkedEmail.value = checkedPhone.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'fullName', checkedFullname.value)
  }
  else if (column.includes('username')) {
    checkedId.value = checkedRegistration.value = checkedBirthday.value = checkedEmail.value = checkedPhone.value = checkedFullname.value = checkedCity.value = false;
    emit('sortArray', 'username', checkedUsername.value)
  }
  else if (column.includes('city')) {
    checkedId.value = checkedRegistration.value = checkedBirthday.value = checkedEmail.value = checkedPhone.value = checkedFullname.value = checkedUsername.value = false;
    emit('sortArray', 'city', checkedCity.value)
  }
  else {
    checkedRegistration.value = checkedBirthday.value = checkedEmail.value = checkedPhone.value = checkedFullname.value = checkedUsername.value = checkedCity.value = false;
    emit('sortArray', 'id', checkedId.value)
  }
}


function addItem() {
  emit('addItem');
}

let itemID = null;
function toggleModal(id) {
  itemID = id;
  emit('toggleModal');
}

function deleteItem() {
  emit('deleteItem', itemID);
  emit('closeModal');
}

</script>

<script>
export default {
  name: "ItemList"
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.list__content {
  width: 100%;
}

.list__item-delete {
  cursor: pointer;
}

.table {
  width: 100%;
}

.table__item {
  padding: 2px;
  vertical-align: middle;
}

.table__item-input {
  display: none;
}

label {
  margin: 0;
  cursor: pointer;
}
</style>
<template>
  <div class="mb-3 mx-3 mx-md-4 shadow bg-white rounded">
    <b-card
     class="transaction-card container-fluid p-1 p-md-3 border-0"
    >
        <b-row class="align-items-center">
          <b-col class="mobile-indicator d-md-none" cols="1">
            <div class="indicator-circle" :style="{backgroundColor: statusColor}"></div>
          </b-col>

          <b-col class="desktop-id-and-method d-none d-md-block" cols="4">
            <b-row class="align-items-center">
              <b-col cols="6" class="d-flex align-items-center" @click="truncate=!truncate">
                <img class="mr-3" v-show="truncate" src="@/assets/icons/chevron-right.svg" alt="Azonosító megjelenítése">
                <p class="pb-0 mb-0 pr-1 small-text transaction-id pointer bg-white" :class="{'truncate': truncate}">{{transaction._id}}</p>
              </b-col>
              <b-col cols="6">
                <p class="pb-0 mb-0 small-text">{{transaction.method}}</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="main-content align-items-center text-left justify-content-around px-0 px-md-3" cols="10" md="6">
            <b-row class="flex-md-row-reverse">
              <b-col cols="12" md="5" class="d-flex align-items-center ">
                <div class="indicator-circle d-none d-md-block mr-3" :style="{backgroundColor: statusColor}"></div>
                <span class="small-text">{{transaction.status}}</span>
              </b-col>
              <p class="col-md-3 pb-0 mb-0 font-weight-bold text-nowrap">{{totalPayments}}</p>
              <p class="col-md-4 pb-0 mb-0 text-nowrap small-text"><span class="d-md-none">Fizetés dátuma:</span> {{transaction.dateOfPayment}}</p>
            </b-row>       
          </b-col>

          <b-col class="download-icon d-none d-md-block" cols="1">
            <span v-if="transaction.attachment.name">
              <img src="@/assets/icons/paperclip-icon.png" alt="Csatolmány">
            </span>
          </b-col>

          <b-col
           class="menu-chevron text-center pointer"
           cols="1"
           :class="visible ? null : 'collapsed'"
           :aria-expanded="visible ? 'true' : 'false'"
           aria-controls="collapse-4"
           @click="visible = !visible"
          >
              <img src="@/assets/icons/arrow.svg" alt="Menü nyitása">
           </b-col>
        </b-row>
    </b-card>
    <!--End of transaction card top-->


    <!--Start of transaction card dropdown-->
    <b-collapse v-model="visible" class="mb-2 border-0">
    <div class="dropdown-divider col-12 m-0"></div>
      <b-card class="border-0">
        <div class="d-flex flex-column">

        <b-row class="mobile-id-details d-flex flex-column d-md-none align-items-start text-left mx-1">
          <div>
           <p class="label mb-0 small-text">Státusz</p>
           <p class="normal-text">{{transaction.status}}</p>
          </div>

          <div>
           <p class="label mb-0 small-text">Azonosító</p>
           <p class="normal-text">{{transaction._id}}</p>
          </div>

          <div>
           <p class="label mb-0 small-text">Hogyan</p>
           <p class="normal-text">{{transaction.method}}</p>
          </div>
          <div class="dropdown-divider col-12 mb-4"></div>
        </b-row>

        <div class="attachement order-md-2 " v-if="transaction.attachment.name">
          <div class="dropdown-divider col-12 mb-4 d-none d-md-block"></div>
          <p class="text-left small-text">Csatolmány</p>
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex align-items-center">
                <img src="@/assets/icons/attachment-icon.svg" :alt="transaction.attachment.name">
                <p class="mb-0 ml-3 normal-text">{{transaction.attachment.name}}</p>
            </div>
            <img class="pointer" src="@/assets/icons/download-icon.svg" alt="Csatolmány letöltése">
          </div>
          <div class="dropdown-divider col-12 mb-4 d-md-none"></div>
        </div>

        <div class="payments order-md-1">
          <b-row v-for="(payment, index) in transaction.payments" :key="payment._id">
            <div class="dropdown-divider col-12 mb-4" v-if="index != 0"></div>
            <b-col cols="12" md="4">
              <p class="mb-2 text-left small-text"><span class="d-none d-md-inline">Biztosítási </span>Időszak</p>
              <p class="text-left normal-text">{{payment.insurancePeriod}}</p>
            </b-col>

            <b-col cols="6" md="2">
              <p class="mb-2 text-left small-text">Díjelőírás</p>
              <p class="text-left normal-text">{{payment.quotedAmount + payment.currency}}</p>
            </b-col>
            
            <b-col cols="6" md="2">
              <p class="mb-2 text-left small-text">Könyvelt díj</p>
              <p class="font-weight-bold text-left normal-text">{{payment.paidAmount + payment.currency}}</p>
            </b-col>

          </b-row>      
        </div>     
      </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsOpen: false,
      idOpen: false,
      visible: false,
      truncate: true
    }
  },
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  computed: {
    totalPayments() {
      let total = 0
      const currency = this.transaction.payments[0].currency

      for(let payment of this.transaction.payments) {
        total += payment.paidAmount
      }

      return total + ' ' + currency
    },
    statusColor() {
      let status = this.transaction.status
      let color = '#fff'

      switch(status) {
        case 'Beérkezett':
          color = '#01BBA1';
          break;
        case 'Folyamatban': 
          color = '#A1CAFF';
          break;
        case 'Sikertelen': 
          color = '#DC414F';
          break;
      }

      return color
    }
  }

}
</script>

<style lang="scss" scoped>

 .indicator-circle {
   width: 12px;
   height: 12px;
   border-radius: 50%;
 }

.transaction-id {
  z-index: 1;
}

 .truncate {
  width: 10ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: transparent;
}

.pointer {
  cursor: pointer
}

.menu-chevron {
  transform: rotate(180deg);
  transition: .3s;
}

.collapsed {
  transform: rotate(0);
}

.small-text {
  font-size: $font-xsmall;
}

.normal-text {
  font-size: $font-small;
}

.transaction-card {
  max-width: 822px;
}

 @media only screen and (min-width: 786px){
   .indicator-circle {
     width: 6px;
     height: 6px;
   }

   .small-text {
     font-size: $font-small;
   }

   .normal-text {
     font-size: $font-mediumsmall;
   }
 }

</style>
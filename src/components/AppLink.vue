<template>
  <div class="app-link-container">
    <el-popover
      ref="popover"
      placement="bottom"
      width="640"
      trigger="hover"
      @show="isActive = true"
      @hide="isActive = false"
      popper-class="popper-applink-cover"
    >
      <el-scrollbar style="height: 100%">
        <div class="app-group">
          <ul v-for="(item, index) in appGroup" :key="index">
            <div class="app-group-box">
              <div class="app-group-title">
                <span v-html="item.theme"></span>
                <em>{{ item.englishName }}</em>
              </div>
            </div>
            <li
              @click="jump(items)"
              v-for="(items,index) in item.services"
              :key="index"
            >
              <img
                :src="items.img"
                style="margin-bottom: 10px; width: 30px; height: 30px"
              />
              {{ items.name }}
            </li>
          </ul>
        </div>
      </el-scrollbar>
      <div class="earth" slot="reference">
        <img
          width="35px"
          height="35px"
          src="../assets/earth.png"
          alt=""
          @click="jumpPortal"
        />
        <span
          :class="{
            'el-icon-arrow-up': isActive,
            'el-icon-arrow-down': !isActive,
          }"
          class="earth-arrow-icon"
        ></span>
      </div>
    </el-popover>
  </div>
</template>
<script>
import {Scrollbar, Popover} from 'element-ui'
// import { getAppList, getJumpPath } from "@core/api/comm.js";
export default {
  name:'AppLink',
  components:{
    ElScrollbar: Scrollbar,
    ElPopover:Popover
  },
  props: {
    appGroup:{
      type: Array,
      default:() => []
    },
    jumpPortalURL: {
      type: String,
      default: `${window.location.origin}/godata/portal/index.html#/`,
    },
    appid: {
      type: String,
      default: "web",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    // this.getAppList();
  },
  methods: {
    // getAppList() {
    //   getAppList({
    //     WebAPIBean: {
    //       query: { appid: this.appid },
    //     },
    //   }).then((res) => {
    //     this.appGroup = res.data;
    //   });
    // },
    jump(item) {
      this.$emit('handleJump',item.code)
    },
    jumpPortal() {
      return window.open(this.jumpPortalURL);
    },
  },
};
</script>
<style >
.popper-applink-cover {
  padding-bottom: 0;
  box-shadow: 0 0 10px rgba(35, 36, 215, 0.1) !important;
  height: 87%;
  /* height:700px; */
  overflow: hidden;
}
.popper-applink-cover /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
<style lang="css" scoped>
.app-group-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 9px;
    /* background: url("/static/portal/images/line.png") no-repeat; */
    position: relative;
    margin: 15px 0;
    margin-bottom: 23px;
}
    .app-group-box em {
      color: #8392a5;
      font-size: 13px;
      font-family: SourceHanSansCN-Light;
      font-weight: 100;
      font-style: normal;
      position: absolute;
      left: 80px;
      top: -4px;
      display: block;
      width: 100px;
      text-align: center;
    }

    .app-group-box span {
      position: absolute;
      font-size: 15px;
      color: #001737;
      top: -7px;
      left: 13px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 600;
    }

    .app-group-title {
      width: 100%;
      height: 9px;
      background: url("../assets/line.png") no-repeat;
      margin-left: 190px;
    }
.app-group {
  }

  .app-group li {
    cursor: pointer;
    text-align: center;
    height: 100px;
    font-size: 13px;
    float: left;
    width: 20%;
    padding: 12px 13px 10px 13px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #182b49;
    font-family: SourceHanSansCN-Light;
    margin-top: -8px;
    margin-bottom: 9px;
}
    .app-group li:hover {
      background: #edf3ff;
    }
  


.earth {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    color: #fff;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    outline: none;
  }

  .earth-arrow-icon {
    margin-top: 4px;
    padding-left: 4px;
    font-size: 12px;
  }
</style>

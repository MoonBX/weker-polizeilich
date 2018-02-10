<template>
  <div class="hello">
    <v-layout>
      <v-header class="box-shadow">
        {{headerObj.title}}
        <v-dropdown class="pull-right"
                    :data="dropdown"
                    trigger="click"
                    position="fixed"
                    @item-click="logout">
          <a href="javascript:void(0)"
             class="ant-dropdown-link ant-dropdown-trigger">
            {{headerObj.userName}}
            <v-icon type="down" class="m-l-xs"></v-icon>
          </a>
        </v-dropdown>
      </v-header>
      <v-layout>
        <v-sider style="flex: 0 0 230;width: 230px;position:fixed; height: 100%">
          <div class="sdn-brand">
            <div class="brand-text text-lt">警务管理平台</div>
          </div>
          <v-menu style="width:230px;background-color:#0c1729"
                  mode="inline"
                  :data="siderObj.menu"
                  :theme="siderObj.theme"
                  selected>
            <template slot-scope="{data}">
              <i v-if="data.icon" :class="'fa fa-' + data.icon"></i>
              <a class="main-menu" @click="setTab(data)">
                {{data.name}}
              </a>
            </template>
            <template slot-scope="{data}" slot="sub">
              <i v-if="data.icon" :class="'fa fa-' + data.icon"></i>
              <span class="sub-menu">
                {{data.name}}
              </span>
            </template>
          </v-menu>
        </v-sider>
        <v-content style="width: 100%;">
          <v-tabs :active-tab-key="tabObj.currentKey"
                  type="editable-card"
                  @remove="removeTab" hideAdd
                  class="tabs">
            <v-tab-pane v-for="tabPane in tabObj.data"
                        :tab-key="tabPane.key"
                        :key="tabPane.key"
                        :tab="tabPane.tab">

              <div :is="tabPane.page"></div>

            </v-tab-pane>
          </v-tabs>
        </v-content>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
  import {sideBarMenu} from '../data/sideBar'

  import CommunitySurveyPage from '@/pages/CommunitySurveyPage'
  import EntranceRecordPage from '@/pages/EntranceRecordPage'
  import EntranceOnlinePage from '@/pages/EntranceOnlinePage'
  import MonitorArrestPage from '@/pages/MonitorArrestPage'
  import MonitorControlRulesPage from '@/pages/MonitorControlRulesPage'
  import MonitorFaceWarningPage from '@/pages/MonitorFaceWarningPage'
  import MonitorFaceRecognizePage from '@/pages/MonitorFaceRecognizePage'
  import MonitorFaceClusterPage from '@/pages/MonitorFaceClusterPage'
  import MonitorSusPersonPage from '@/pages/MonitorSusPersonPage'
  import MonitorVideoPage from '@/pages/MonitorVideoPage'
  import HrInfoQueryPage from '@/pages/HrInfoQueryPage'
  import ResidentPage from '@/pages/ResidentPage'
  import AnnounceEntrancePage from '@/pages/AnnounceEntrancePage'
  import AnnounceAppPage from '@/pages/AnnounceAppPage'
  import BewarePersonPage from '@/pages/BewarePersonPage'
  import BewareFloatPopulationPage from '@/pages/BewareFloatPopulationPage'
  import BewareRoomPage from '@/pages/BewareRoomPage'
  import BewareRoomHistoryPage from '@/pages/BewareRoomHistoryPage'
  import BewareRulesPage from '@/pages/BewareRulesPage'
  import CommunityStatisticsPage from '@/pages/CommunityStatisticsPage'
  import CommunityPersonHistoryPage from '@/pages/CommunityPersonHistoryPage'
  import AuthRolePage from '@/pages/AuthRolePage'
  import AuthUserPage from '@/pages/AuthUserPage'
  import SituationStandardPage from '@/pages/SituationStandardPage'
  import BlacklistManagePage from '@/pages/BlacklistManagePage'
  import BlacklistBewarePage from '@/pages/BlacklistBewarePage'
  import DataBoardPage from '@/pages/DataBoardPage'

  export default {
    name: 'hello',
    components: {
      'community-survey-page': CommunitySurveyPage,
      'entrance-record-page': EntranceRecordPage,
      'entrance-online-page': EntranceOnlinePage,
      'monitor-arrest-page': MonitorArrestPage,
      'monitor-control-rules-page': MonitorControlRulesPage,
      'monitor-face-warning-page': MonitorFaceWarningPage,
      'monitor-face-recognize-page': MonitorFaceRecognizePage,
      'monitor-face-cluster-page': MonitorFaceClusterPage,
      'monitor-sus-person-page': MonitorSusPersonPage,
      'monitor-video-page': MonitorVideoPage,
      'hr-info-query-page': HrInfoQueryPage,
      'resident-page': ResidentPage,
      'announce-entrance-page': AnnounceEntrancePage,
      'announce-app-page': AnnounceAppPage,
      'beware-person-page': BewarePersonPage,
      'beware-float-population-page': BewareFloatPopulationPage,
      'beware-room-page': BewareRoomPage,
      'beware-room-history-page': BewareRoomHistoryPage,
      'beware-rules-page': BewareRulesPage,
      'community-statistics-page': CommunityStatisticsPage,
      'community-person-history-page': CommunityPersonHistoryPage,
      'auth-role-page': AuthRolePage,
      'auth-user-page': AuthUserPage,
      'situation-standard-page': SituationStandardPage,
      'blacklist-manage-page': BlacklistManagePage,
      'blacklist-beware-page': BlacklistBewarePage,
      'data-board-page': DataBoardPage
    },
    data() {
      return {
        headerObj: {
          userName: '万事屋',
          title: '警务管理平台'
        },
        dropdown: [
          {content: '退出登录'}
        ],
        siderObj: {
          menu: sideBarMenu,
          theme: 'dark'
        },
        tabObj: {
          data: [
            {
              key: 'community-survey',
              tab: '社区人房概况',
              page: 'community-survey-page'
            }
          ],
          keyIndex: 1,
          currentKey: 'community-survey'
        }
      }
    },
    methods: {
      dropdownClick(data) {
      },
      setTab(data) {
        let obj = this.tabObj.data;
        let a = obj.find(item => {
          return item.key === data.href;
        });

        if(!a){
          obj.push({
            key: data.href,
            tab: data.name,
            page: data.href + '-page'
          });
        }

        this.tabObj.data = obj;
        this.tabObj.currentKey = data.href;
      },

      removeTab(tabKey) {
        let obj = this.tabObj.data;

        for (let i = 0; i < obj.length; i++) {
          if (obj[i].key == tabKey) {
            obj.splice(i, 1);
            break;
          }
        }

        this.tabObj.data = obj;
      },

      logout(){
        this.$router.push('/login')
        localStorage.removeItem('policeToken');
      }
    },
    created() {
      console.log(localStorage.policeToken)
      if(!localStorage.policeToken){
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hello {
    .box-shadow {
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    height: 100%;
    .ant-layout {
      height: 100%;
      .ant-layout-header {
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        background-color: #fff;
        padding-left: 240px;
        padding-right: 20px;
        line-height: 50px;
        z-index: 999;
      }
      .ant-layout-sider {
        background-color: #0c1729;
        padding-top: 40px;
        overflow-y: auto;
        z-index: 1000;
        .sdn-brand {
          text-align: center;
          margin-bottom: 40px;
          .brand-img {
            margin-bottom: 8px;
          }
          .brand-text {
            color: #ffffff;
            font-weight: 700;
            font-size: 15px;
          }
        }
        .main-menu {
          margin-left: 5px;
          display: inline;
        }
        .sub-menu {
          margin-left: 5px;
        }
      }
      .ant-layout-content {
        margin-top: 50px;
        width: auto;
        padding-left: 230px;
        .tabs {
          margin-top: 20px;
          padding: 0 10px;
        }
      }
    }
  }
</style>

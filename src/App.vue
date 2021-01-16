<template>
  <v-app id="app">
    <!--DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <!--HOME SCREEN-->
        <template :to="{ name: 'home' }">
          <v-list-item>
            <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-title>Start</v-list-item-title>
          </v-list-item>
          
        </template>
        <!--HOME SCREEN-->

        <!--WAREHOUSE SECCTION DRAWER-->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>Warehouse</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--CATEGORIES ITEM-->
            <v-list-item :to="{ name: 'category' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Categories </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--CATEGORIES ITEM-->
            <!--ARTICLES ITEM-->
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Articles</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--ARTICLES ITEM-->
          </v-list-group>
        </template>
        <!--WAREHOUSE SECCTION DRAWER-->

        <!--PURCHASES SECCTION DRAWER-->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Purschases </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--INCOMES ITEM-->
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Incomes </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--INCOMES ITEM-->

            <!--PROVIDERS ITEM-->
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Providers </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--PROVIDERS ITEM-->
          </v-list-group>
        </template>
        <!--PURCHASES SECCTION DRAWER-->

        <!--SALES SECCTION DRAWER-->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Sales </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--SALES ITEM-->
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Sales </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--SALES ITEM-->

            <!--CLIENTS ITEM-->
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Clients </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--CLIENTS ITEM-->
          </v-list-group>
        </template>
        <!--SALES SECCTION DRAWER-->
        <!--ACCESS SECCTION DRAWER-->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Access </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Users </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <!--ACCESS SECCTION DRAWER-->

        <!--QUERIES SECCTION DRAWER-->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Queries </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Purscharses </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Sales </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <!--QUERIES SECCTION DRAWER-->
      </v-list>
    </v-navigation-drawer>
    <!--DRAWER -->

    <!--APP-NAV-->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Sistema</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>input</v-icon>
      </v-btn>
    </v-app-bar>
    <!--APP-NAV-->

    <!--MAIN CONTENT-->
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>
    <!--MAIN CONTENT-->

    <!--FOOTER-->
    <v-footer dark height="auto">
      <v-layout justify-content>
        <v-flex text-xs-center>
          <v-card flat tile color="primary" class="white--text">
            <v-card-text class="white--text pt-0">
              Rauls Soft Corp &copy;2021
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
    <!--FOOTER-->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
};
</script>

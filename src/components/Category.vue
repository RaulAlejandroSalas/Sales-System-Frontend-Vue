<template>
  <v-layout align-start>
    <v-flex>
      <v-toolbar flat color="white">
        <v-toolbar-title>Categories</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Create</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm12 md12>
                    <v-text-field v-model="name" label="Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="description"
                      label="Description"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12 v-show="valid">
                    <div
                      class="red--text"
                      v-for="v in validMessage"
                      :key="v"
                      v-text="v"
                    ></div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>

      <v-data-table
        :headers="headers"
        :search="search"
        :sort-by="name"
        :items="categories"
        class="elevation-1"
      >
        <template v-slot:item.name="{ item }">
          <span>{{ item.name }}</span>
        </template>

        <template v-slot:item.description="{ item }">
          <span>{{ item.description }}</span>
        </template>

        <template v-slot:item.state="{ item }">
          <div v-if="item.state">
            <span class="blue--text">Activo</span>
          </div>
          <div v-else>
            <span class="red--text">Inactivo</span>
          </div>
        </template>
        <template v-slot:item.options="{ item }">
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            <template v-if="item.state">
              <v-icon small class="mr-2" @click="editItem(item)">
                block
              </v-icon>
            </template>
            <template v-else>
              <v-icon small @click="deleteItem(item)">check </v-icon>
            </template>
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="listCategories()">Reset</v-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    _id: "",
    adId: "",
    name: "",
    description: "",
    categories: [],
    search: "",
    valid: 0,
    validMessage: [],
    addModal: 0,
    addAction: 0,
    headers: [
      { text: "Name", value: "name", sortable: true },
      { text: "Description", value: "description", sortable: false },
      { text: "State", value: "state", sortable: false },
      { text: "Options", value: "options", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Category" : "Edit Category";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.listCategories();
  },

  methods: {
    listCategories() {
      let me = this;
      let header = { token: this.$store.state.token };
      let config = { headers: header };
      axios
        .get("category/list", config)
        .then((response) => {
          me.categories = response.data;
        })
        .catch(console.error);
    },
    editItem(item) {
      this._id = item._id;
      this.name = item.name;
      this.description = item.description;
      this.dialog = true;
      this.editedIndex = 1;
    },

    validateInput() {
      this.valid = 0;
    },
    activate() {
      let me = this;
      let header = { token: this.$store.state.token };
      let config = { headers: header };
      axios
        .put("category/activate", { _id: this.adId }, config)
        .then(() => {
          me.addModal = 0;
          me.addAction = 0;
          me.adId = "";
          me.listCategories();
        })
        .catch(console.error);
    },
    deactivate() {
      let me = this;
      let header = { token: this.$store.state.token };
      let config = { headers: header };
      axios
        .put("category/deactivate", { _id: this.adId }, config)
        .then(() => {
          me.addModal = 0;
          me.addAction = 0;
          me.adId = "";
          me.listCategories();
        })
        .catch(console.error);
    },
    save() {},
    close() {
      this.dialog = false;
    },
  },
};
</script>
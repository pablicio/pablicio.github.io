(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables/create"],{"3fdc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[a("card",[a("b-row",{attrs:{slot:"header","align-v":"center"},slot:"header"},[a("b-col",{attrs:{cols:"8"}},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.$t("cruds.tables.edit.title1")))])])],1),a("validation-observer",{ref:"formValidator"},[t.loading?a("form-loader",{attrs:{height_custom:"410px"}}):a("b-form",{attrs:{role:"form"}},[a("div",{staticClass:"pl-lg-4"},[a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("h6",{staticClass:"heading-small text-muted mb-4"},[t._v(t._s(t.$t("cruds.tables.edit.title1")))]),a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("base-input",{attrs:{name:t.$t("cruds.tables.edit.area_id"),label:t.$t("cruds.tables.edit.area_id"),rules:{required:!0}}},[a("el-select",{attrs:{value:t.entry.area_id,placeholder:t.$t("cruds.tables.edit.area_id")},on:{input:t.updateAreaId}},t._l(t.lists.areas,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("base-input",{staticClass:"mb-3",attrs:{placeholder:t.$t("cruds.tables.edit.link"),disabled:"",name:t.$t("cruds.tables.edit.link"),label:t.$t("cruds.tables.edit.link"),value:t.entry.table_link}})],1)],1)],1),t.entry.id?a("b-col",{attrs:{lg:"6"}},[a("h6",{staticClass:"heading-small text-muted mb-4"},[t._v(t._s(t.$t("cruds.tables.edit.title2"))+" "),a("strong",[t._v(t._s(t.$t("cruds.tables.title"))+" N° "+t._s(t.entry.id))])]),a("img",{staticClass:"card-image",attrs:{alt:"Image placeholder",src:t.entry.table_link}})]):t._e(),a("div",{staticClass:"text-center"},[a("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.indexSubmit.apply(null,arguments)}}},[t._v(t._s(t.$t("general.save")))]),a("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"default"},on:{click:function(e){return e.preventDefault(),t.createSubmit.apply(null,arguments)}}},[t._v(t._s(t.$t("general.save_and_continue")))])],1)],1)],1)])],1)],1)],1)},i=[],r=a("5530"),l=(a("14d9"),a("2f62")),n={data:function(){return{}},computed:Object(r["a"])({},Object(l["c"])("TableSingle",["entry","loading","lists"])),watch:{"this.$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},beforeDestroy:function(){this.resetState()},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("TableSingle",["updateData","fetchEditData","resetState","setAreaId"])),{},{updateAreaId:function(t){this.setAreaId(t)},createSubmit:function(){var t=this;this.$refs.formValidator.validate().then((function(e){e&&t.updateData().then((function(){t.$eventHub.$emit("update-success"),window.location.reload()})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))}))},indexSubmit:function(){var t=this;this.$refs.formValidator.validate().then((function(e){e&&t.updateData().then((function(){t.$eventHub.$emit("update-success"),t.$router.push({path:t.$getViewPath("tables")})})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))}))}})},c=n,o=a("2877"),u=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},4733:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt--7",attrs:{fluid:""}},[a("b-row",[a("b-col",{staticStyle:{padding:"0"},attrs:{lg:"2"}},[t.loading?a("form-loader",{attrs:{height_custom:"260px"}}):a("card",{attrs:{"header-classes":"bg-transparent"}},[a("b-row",{staticClass:"group-filter"},[a("b-col",{staticStyle:{display:"flex"},attrs:{cols:"6",lg:"6"}},[a("base-button",{staticClass:"filter",attrs:{size:"sm",type:"default"},on:{click:t.initFilters}},[t._v(t._s(t.$t("general.filter"))+" ")]),a("base-button",{staticClass:"filter",attrs:{size:"sm",type:"default"},on:{click:t.eraseFilters}},[t._v(t._s(t.$t("general.clear"))+" ")])],1)],1),a("br"),a("br"),a("b-row",{staticClass:"group-filter"},[a("b-col",{attrs:{cols:"12",lg:"12"}},[a("base-input",{attrs:{"input-classes":"form-control-sm",type:"text",label:t.$t("cruds.tables.index.number")},model:{value:t.search_by_number,callback:function(e){t.search_by_number=e},expression:"search_by_number"}})],1)],1),a("b-row",{staticClass:"group-filter"},[a("b-col",{attrs:{cols:"12",lg:"12"}},[a("base-input",{attrs:{"input-classes":"form-control-sm",type:"text",label:t.$t("cruds.tables.index.status")},model:{value:t.search_by_status,callback:function(e){t.search_by_status=e},expression:"search_by_status"}})],1)],1),a("b-row",{staticClass:"group-filter"},[a("b-col",{attrs:{cols:"12",lg:"12"}},[a("base-input",{attrs:{name:t.$t("cruds.tables.index.area_id"),label:t.$t("cruds.tables.index.area_id")}},[a("el-select",{attrs:{placeholder:t.$t("cruds.tables.index.area_id")},model:{value:t.search_by_area_id,callback:function(e){t.search_by_area_id=e},expression:"search_by_area_id"}},t._l(t.lists.areas,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)],1),a("b-col",{attrs:{lg:"10"}},[a("form-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{height_custom:"410px"}}),a("card",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t.$can("table_create")?a("b-col",{staticClass:"py-2 text-right",attrs:{cols:"12",lg:"12"}},[a("base-button",{staticClass:"btn btn-default",attrs:{size:"sm",title:t.$t("general.csv_export")}},[a("i",{staticClass:"fa-solid fa-download"})]),a("base-button",{staticClass:"btn btn-default",attrs:{size:"sm",title:t.$t("general.csv_import")}},[a("i",{staticClass:"fa-solid fa-upload"})]),a("base-button",{staticClass:"btn btn-default",attrs:{size:"sm",title:t.$t("general.print")}},[a("i",{staticClass:"fa-solid fa-print"})]),a("base-button",{staticClass:"btn btn-default",attrs:{size:"sm",title:t.$t("general.list")},on:{click:t.navigateToList}},[a("i",{staticClass:"fa-solid fa-table-list"})]),a("base-button",{staticClass:"btn btn-default",attrs:{size:"sm"},on:{click:t.navigateToCreate}},[t._v(" "+t._s(t.$t("general.new"))+" ")])],1):t._e(),a("div",{staticClass:"row"},t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"col-lg-3 col-md-6"},[a("b-card",{staticClass:"card-content"},[a("div",[a("a",{attrs:{href:e.table_link,target:"_blank"}},[a("p",{staticClass:"mb-1",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(t.$t("cruds.tables.title"))+" N° "+t._s(e.id)+" "),"empty"==e.status?a("b-badge",{attrs:{pill:"",variant:"success"}},[t._v(t._s(t.$t("general.empty")))]):a("b-badge",{attrs:{pill:"",variant:"warning"}},[t._v(t._s(t.$t("general.busy")))])],1),a("img",{staticClass:"card-image",attrs:{alt:"Image placeholder",src:e.table_link}})]),a("b-row",{staticClass:"my-0 p-0",attrs:{"align-v":"center"}},[a("b-col",{attrs:{sm:"12"}},[a("div",[a("a",{staticClass:"card-action",on:{click:function(a){return t.navigateToEdit(e)}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]),a("a",{staticClass:"card-action",on:{click:function(a){return t.handleDelete(e)}}},[a("i",{staticClass:"material-icons red-text",staticStyle:{color:"red"}},[t._v("delete")])])])])],1)],1)])],1)})),0),a("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap py-1"},[a("p",{staticClass:"card-category"},[t._v(" "+t._s(t.total)+" "+t._s(t.$t("general.datatable_registers"))+" ")]),a("base-pagination",{staticClass:"pagination-no-border py-0",attrs:{current:t.query.page,"per-page":t.query.limit,total:t.total},on:{change:function(e){return t.clickPagination(e)}}})],1)],1)],1)],1)],1)},i=[],r=a("5530"),l=(a("14d9"),a("99af"),a("2f62")),n=a("fb6f"),c={mixins:[n["a"]],data:function(){return{xprops:{module:"TableIndex",route:"tables",permission_prefix:"table_",view_action:{show:!1,edit:!0,delete:!0}}}},mounted:function(){this.query.limit=8,this.initFilters(this.query)},computed:Object(r["a"])({},Object(l["c"])("TableIndex",["data","total","lists","loading"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("TableIndex",["fetchIndexData","setQuery","resetState","setLinearFilters","destroyData"])),{},{navigateToCreate:function(){this.$router.push({name:"tables.create"})},navigateToList:function(){this.$setViewPath("tables","/"),this.$router.push({name:"tables.index"})},navigateToEdit:function(t){this.$router.push({path:"/tables/".concat(t.id,"/edit")})},handleDelete:function(t){var e=this;this.$swal.fire({title:this.$t("general.title_modal_delete"),text:this.$t("general.subtitle_modal_delete"),type:"warning",showCancelButton:!0,confirmButtonClass:"btn btn-success btn-fill",cancelButtonClass:"btn btn-danger btn-fill",confirmButtonText:this.$t("general.delete"),cancelButtonText:this.$t("general.cancel"),buttonsStyling:!1}).then((function(a){a.value&&(e.destroyData(t.id),e.$swal.fire({title:e.$t("general.excluded"),text:"".concat(e.$t("general.you_removed")," ").concat(t.id),type:"success",confirmButtonClass:"btn btn-success btn-fill",buttonsStyling:!1}))}))}})},o=c,u=(a("b685"),a("2877")),d=Object(u["a"])(o,s,i,!1,null,"3c30f9c8",null);e["default"]=d.exports},"56f0":function(t,e,a){},b685:function(t,e,a){"use strict";a("56f0")},c855:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[a("card",[a("b-row",{attrs:{slot:"header","align-v":"center"},slot:"header"},[a("b-col",{attrs:{cols:"8"}},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.$t("cruds.tables.create.title1")))])])],1),a("validation-observer",{ref:"formValidator"},[a("b-form",{attrs:{role:"form"}},[a("div",{staticClass:"pl-lg-4"},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("h6",{staticClass:"heading-small text-muted mb-4"},[t._v(t._s(t.$t("cruds.tables.create.basic_informations")))]),a("b-row",[a("b-col",{attrs:{lg:"4"}},[a("base-input",{attrs:{name:t.$t("cruds.tables.create.area_id"),label:t.$t("cruds.tables.create.area_id"),rules:{required:!0}}},[a("el-select",{attrs:{value:t.entry.area_id,placeholder:t.$t("cruds.tables.create.area_id")},on:{input:t.updateAreaId}},t._l(t.lists.areas,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1),a("div",{staticClass:"text-center"},[a("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.indexSubmit.apply(null,arguments)}}},[t._v(t._s(t.$t("general.save")))]),a("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"default"},on:{click:function(e){return e.preventDefault(),t.createSubmit.apply(null,arguments)}}},[t._v(t._s(t.$t("general.save_and_continue")))])],1)],1)],1)])],1)],1)],1)},i=[],r=a("5530"),l=(a("14d9"),a("2f62")),n={data:function(){return{}},computed:Object(r["a"])({},Object(l["c"])("TableSingle",["entry","loading","lists"])),mounted:function(){this.resetState(),this.fetchCreateData()},beforeDestroy:function(){this.resetState()},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("TableSingle",["storeData","fetchCreateData","resetState","setAreaId"])),{},{updateAreaId:function(t){this.setAreaId(t)},createSubmit:function(){var t=this;this.$refs.formValidator.validate().then((function(e){e&&t.storeData().then((function(){t.$eventHub.$emit("create-success"),window.location.reload()})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))}))},indexSubmit:function(){var t=this;this.$refs.formValidator.validate().then((function(e){e&&t.storeData().then((function(){t.$eventHub.$emit("create-success"),t.$router.push({path:t.$getViewPath("tables")})})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))}))}})},c=n,o=a("2877"),u=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},fb6f:function(t,e,a){"use strict";e["a"]={data:function(){return{query:{sort:"id",order:"desc",offset:0,limit:4,s:"",page:1},search_by_number:"",search_by_status:"",search_by_area_id:""}},watch:{search_by_number:function(t){this.updateLinearFilter("id",t)},search_by_status:function(t){this.updateLinearFilter("status",t)},search_by_area_id:function(t){this.updateLinearFilter("area_id",t)}},methods:{eraseFilters:function(){this.clearFilters(),this.query.page=1,this.resetState(),this.initFilters(this.query)},clickPagination:function(t){this.clearFilters(),this.query.page=t,this.initFilters(this.query)},initFilters:function(t){this.setQuery(t),this.fetchIndexData()},updateLinearFilter:function(t,e){this.setLinearFilters({column:t,query_1:e})},clearFilters:function(){this.search_by_number="",this.search_by_status="",this.search_by_area_id="",this.updateLinearFilter("id",""),this.updateLinearFilter("status",""),this.updateLinearFilter("area_id","")}}}}}]);
//# sourceMappingURL=create.135ebfcb.js.map
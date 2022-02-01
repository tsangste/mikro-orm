"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99165],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Filters"},s=void 0,p={unversionedId:"filters",id:"version-4.4/filters",title:"Filters",description:"MikroORM has the ability to pre-define filter criteria and attach those filters",source:"@site/versioned_docs/version-4.4/filters.md",sourceDirName:".",slug:"/filters",permalink:"/docs/4.4/filters",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/filters.md",tags:[],version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643755572,formattedLastUpdatedAt:"2/1/2022",frontMatter:{title:"Filters"},sidebar:"version-4.4/docs",previous:{title:"Cascading",permalink:"/docs/4.4/cascading"},next:{title:"Deployment",permalink:"/docs/4.4/deployment"}},d=[{value:"Properties of filter",id:"properties-of-filter",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Filters without parameters",id:"filters-without-parameters",children:[],level:3}],level:2},{value:"Global filters",id:"global-filters",children:[],level:2},{value:"Using filters",id:"using-filters",children:[],level:2},{value:"Filters and populating of relationships",id:"filters-and-populating-of-relationships",children:[],level:2},{value:"Naming of filters",id:"naming-of-filters",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MikroORM has the ability to pre-define filter criteria and attach those filters\nto given entities. The application can then decide at runtime whether certain\nfilters should be enabled and what their parameter values should be. Filters\ncan be used like database views, but they are parameterized inside the application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter can be defined at the entity level, dynamically via EM (global filters)\nor in the ORM configuration.")),(0,i.kt)("p",null,"Filters are applied to those methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"find()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"findOne()"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"findAndCount()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"findOneOrFail()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"count()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeUpdate()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeDelete()"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cond")," parameter can be a callback, possibly asynchronous.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'expensive', cond: { price: { $gt: 1000 } } })\n@Filter({ name: 'long', cond: { 'length(text)': { $gt: 10000 } } })\n@Filter({ name: 'hasAuthor', cond: { author: { $ne: null } }, default: true })\n@Filter({ name: 'writtenBy', cond: args => ({ author: { name: args.name } }) })\nexport class Book {\n  ...\n}\n\nconst books1 = await orm.em.find(Book, {}, {\n  filters: ['long', 'expensive'],\n});\nconst books2 = await orm.em.find(Book, {}, {\n  filters: { hasAuthor: false, long: true, writtenBy: { name: 'God' } },\n});\n")),(0,i.kt)("h2",{id:"properties-of-filter"},"Properties of filter"),(0,i.kt)("p",null,"There are three parameters you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - can be used to enable a filter on the query can also used to pass a parameter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cond")," - is the condition that should be added to the query when the filter is enabled. This can be a callback, even async"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default")," - indicates if the filter is enabled by default on the query")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"You can define the ",(0,i.kt)("inlineCode",{parentName:"p"},"cond")," dynamically as a callback. This callback can be also\nasynchronous. It will get two arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args")," - dictionary of parameters provided by user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - type of operation that is being filtered, one of ",(0,i.kt)("inlineCode",{parentName:"li"},"'read'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'update'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'delete'"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'writtenBy', cond: async (args, type) => {\n  if (type === 'update') {\n    return {}; // do not apply when updating\n  }\n\n  return { author: { name: args.name } };\n} })\nexport class Book {\n  ...\n}\n\nconst books = await orm.em.find(Book, {}, {\n  filters: { writtenBy: { name: 'God' } },\n});\n")),(0,i.kt)("h3",{id:"filters-without-parameters"},"Filters without parameters"),(0,i.kt)("p",null,"If we want to have a filter condition that do not need arguments, but we want\nto access the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter, we will need to explicitly set ",(0,i.kt)("inlineCode",{parentName:"p"},"args: false"),",\notherwise error will be raised due to missing parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Filter({\n  name: 'withoutParams',\n  cond(_, type) {\n    return { ... };\n  },\n  args: false,\n  default: true,\n})\n")),(0,i.kt)("h2",{id:"global-filters"},"Global filters"),(0,i.kt)("p",null,"We can also register filters dynamically via ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," API. We call such filters\nglobal. They are enabled by default (unless disabled via last parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"addFilter()"),"\nmethod), and applied to all entities. You can limit the global filter to only specified\nentities. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filters as well as filter params set on the EM will be copied to all its forks.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// bound to entity, enabled by default\nem.addFilter('writtenBy', args => ({ author: args.id }), Book);\n\n// global, enabled by default, for all entities\nem.addFilter('tenant', args => { ... });\n\n// global, enabled by default, for only specified entities\nem.addFilter('tenant', args => { ... }, [Author, Book]);\n...\n\n// set params (probably in some middleware)\nem.setFilterParams('tenant', { tenantId: 123 });\nem.setFilterParams('writtenBy', { id: 321 });\n")),(0,i.kt)("p",null,"Global filters can be also registered via ORM configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  filters: { tenant: { cond: args => ({ tenant: args.tenant }), entity: ['Author', 'User'] } },\n  ...\n})\n")),(0,i.kt)("h2",{id:"using-filters"},"Using filters"),(0,i.kt)("p",null,"We can control what filters will be applied via ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions"),".\nWe can either provide an array of names of filters you want to enable, or options\nobject, where we can also disable a filter (that was enabled by default), or pass some\nparameters to those that are expecting them."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"By passing ",(0,i.kt)("inlineCode",{parentName:"p"},"filters: false")," we can also disable all the filters for given call. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"em.find(Book, {}); // same as `{ tenantId: 123 }`\nem.find(Book, {}, { filters: ['writtenBy'] }); // same as `{ author: 321, tenantId: 123 }`\nem.find(Book, {}, { filters: { tenant: false } }); // disabled tenant filter, so truly `{}`\nem.find(Book, {}, { filters: false }); // disabled all filters, so truly `{}`\n")),(0,i.kt)("h2",{id:"filters-and-populating-of-relationships"},"Filters and populating of relationships"),(0,i.kt)("p",null,"When populating relationships, filters will be applied only to the root entity of\ngiven query, but not to those that are auto-joined. On the other hand, this means that\nwhen you use the default loading strategy - ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadStrategy.SELECT_IN")," - filters will\nbe applied to every entity populated this way, as the child entities will become\nroot entities in their respective load calls."),(0,i.kt)("h2",{id:"naming-of-filters"},"Naming of filters"),(0,i.kt)("p",null,"When toggling filters via ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions"),", we do not care about the entity name. This\nmeans that when you have multiple filters defined on different entities, but with\nthe same name, they will be controlled via single toggle in the ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'tenant', cond: args => ({ tenant: args.tenant }) })\nexport class Author {\n  ...\n}\n\n@Entity()\n@Filter({ name: 'tenant', cond: args => ({ tenant: args.tenant }) })\nexport class Book {\n  ...\n}\n\n// this will apply the tenant filter to both Author and Book entities (with SELECT_IN loading strategy)\nconst authors = await orm.em.find(Author, {}, {\n  populate: ['books'],\n  filters: { tenant: 123 },\n});\n")))}u.isMDXComponent=!0}}]);
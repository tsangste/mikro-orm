"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(k,r(r({ref:t},d),{},{components:n})):o.createElement(k,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9023:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var o=n(3117),i=n(102),a=(n(7294),n(3905)),r=["components"],l={title:"Usage with MongoDB"},s=void 0,p={unversionedId:"usage-with-mongo",id:"version-5.0/usage-with-mongo",title:"Usage with MongoDB",description:"To use MikroORM with mongo database, do not forget to install @mikro-orm/mongodb",source:"@site/versioned_docs/version-5.0/usage-with-mongo.md",sourceDirName:".",slug:"/usage-with-mongo",permalink:"/docs/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/usage-with-mongo.md",tags:[],version:"5.0",lastUpdatedBy:"Shaun Thomas Frisbee",lastUpdatedAt:1645000828,formattedLastUpdatedAt:"2/16/2022",frontMatter:{title:"Usage with MongoDB"},sidebar:"docs",previous:{title:"Usage with SQL Drivers",permalink:"/docs/usage-with-sql"},next:{title:"Quick Start",permalink:"/docs/quick-start"}},d=[{value:"Defining entity",id:"defining-entity",children:[],level:2},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[],level:2},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[],level:2},{value:"Transactions",id:"transactions",children:[],level:2},{value:"Indexes",id:"indexes",children:[],level:2},{value:"Native collection methods",id:"native-collection-methods",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use MikroORM with mongo database, do not forget to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mongodb"),"\ndependency. Then call ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init()")," as part of bootstrapping your app:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To access driver specific methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"em.aggregate()")," we need to specify\nthe driver type when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init<D>()"),". Alternatively we can cast the\n",(0,a.kt)("inlineCode",{parentName:"p"},"orm.em")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," exported from the driver package:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/mongodb';\nconst em = orm.em as EntityManager;\nconst qb = em.aggregate(...);\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"clientUrl")," to setup hosts, using ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," is not supported.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { MongoDriver } from '@mikro-orm/mongodb'; // or any other SQL driver package\n\nconst orm = await MikroORM.init<MongoDriver>({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  clientUrl: '...',\n  type: 'mongo',\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,a.kt)("h2",{id:"defining-entity"},"Defining entity"),(0,a.kt)("p",null,"When defining entity, do not forget to define primary key like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string; // won't be saved in the database\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only ",(0,a.kt)("inlineCode",{parentName:"p"},"_id: ObjectId")," will be saved in the database. ",(0,a.kt)("inlineCode",{parentName:"p"},"id: string")," is virtual and is\nalso optional. ")),(0,a.kt)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),(0,a.kt)("p",null,"Every entity has both ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),(0,a.kt)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),(0,a.kt)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),(0,a.kt)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),(0,a.kt)("h2",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Starting with v3.4, MongoDB driver supports transactions. To use transactions, there\nare several things you need to respect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you need to use replica set (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vkarpov15/run-rs"},"run-rs"),")"),(0,a.kt)("li",{parentName:"ul"},"implicit transactions are disabled by default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"implicitTransactions: true")," to enable them globally"),(0,a.kt)("li",{parentName:"ul"},"or use explicit transaction demarcation via ",(0,a.kt)("inlineCode",{parentName:"li"},"em.transactional()")))),(0,a.kt)("li",{parentName:"ul"},"you need to explicitly create all collections before working with them",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"orm.getSchemaGenerator().createSchema()")," method to do so")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# first create replica set\n$ run-rs -v 4.2.3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM } from '@mikro-orm/core';\nimport { MongoDriver } from '@mikro-orm/mongodb';\n\n// make sure to provide the MongoDriver type hint\nconst orm = await MikroORM.init<MongoDriver>({\n  entities: [Author, Book, ...],\n  clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/my-db-name?replicaSet=rs0',\n  type: 'mongo',\n  implicitTransactions: true, // defaults to false\n});\n\nawait orm.getSchemaGenerator().createSchema();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createCollections")," method is present on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDriver")," class only. You need\nto have the entity manager correctly typed (as ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager<MongoDriver>"),").")),(0,a.kt)("h2",{id:"indexes"},"Indexes"),(0,a.kt)("p",null,"Starting with v3.4, MongoDB driver supports indexes and unique constraints. You can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"@Index()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Unique()")," as described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/defining-entities#indexes"},"Defining Entities section"),".\nTo automatically create new indexes when initializing the ORM, you need to enable\n",(0,a.kt)("inlineCode",{parentName:"p"},"ensureIndexes")," option. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init<MongoDriver>({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  type: 'mongo',\n  ensureIndexes: true, // defaults to false\n});\n")),(0,a.kt)("p",null,"Alternatively you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureIndexes()")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGenerator"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SchemaGenerator support for mongo was introduced in v5.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.getSchemaGenerator().ensureIndexes();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can pass additional index/unique options via ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameter:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Unique({ options: { partialFilterExpression: { name: { $exists: true } } }})"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also create text indexes by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," parameter:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Index({ properties: ['name', 'caption'], type: 'text' })"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you provide only ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," in the index definition, it will be used as is,\nthis allows to define any kind of index:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Index({ options: { point: '2dsphere', title: -1 } })")," ")),(0,a.kt)("h2",{id:"native-collection-methods"},"Native collection methods"),(0,a.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"Those methods execute native driver methods like Mongo's ",(0,a.kt)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),(0,a.kt)("p",null,"They are also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"There is also shortcut for calling ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}m.isMDXComponent=!0}}]);
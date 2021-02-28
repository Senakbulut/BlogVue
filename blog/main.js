Vue.component("listElement", {

  props:{ 
    id:{
      type: Number,
      required:true
    },
    image:{
      type: String,
      default: 'https://placeimg.com/350/150/any/1',
    },
    header:{
      type: String,
      required:true
    },
    text:{
      type: String,
    },
   
  },
  template: `<li>
    <img :src="image" alt="">
    <div class="content">
        <h2>{{header}}</h2>
        <slot name="date"></slot>
        <p>{{text}}</p>
        <button @click="removeElement">Listeden çıkar</button>
        <slot name="entryLink"></slot>
    </div>
</li>`,
  methods: {
    removeElement(){
      this.$emit('remove-element',this.id)
    }
  },
});
new Vue({
el: "#app",
  data:{
      selected:'listView'
  },
  components:{
    'newEntry':{
      template:'#newEntry'
    },
    'listView':{
      template:'#home',
      data() {
        return {
          listElement:[
            {
                id:1,
                image:'https://placeimg.com/350/150/any/1',
                header:'Bu benim birinci basliğim',
                text:'Bu da benim birinci yazdiğim metin'
            },
            {
              id:2,
              image:'https://placeimg.com/350/150/any/2',
              header:'Bu benim ikinci basliğim',
              text:'Bu da benim ikinci yazdiğim metin'
          },
          {
              id:3,
              image:'https://placeimg.com/350/150/any/3',
              header:'Bu benim üçüncü basliğim',
              text:'Bu da benim üçüncü yazdiğim metin'
          }
        ]
        }
      },
      methods:{
        removeFromList(id){
          this.listElement = this.listElement.filter(element => element.id !== id)
        }
      },
    }
  }
});

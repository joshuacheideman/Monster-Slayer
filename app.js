new Vue({
	el: "#app",
	data:
	{
		GameStart:false
	},
	methods:{
		StartGame: function(){
			this.GameStart = !this.GameStart;
		}
	}
})
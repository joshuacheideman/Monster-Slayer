new Vue({
	el: "#app",
	data:
	{
		GameStart:false,
		PlayerHealth:100,
		EnemyHealth:100,
	},
	methods:{
		StartGame: function(){
			this.GameStart = !this.GameStart;
		}
	}
})
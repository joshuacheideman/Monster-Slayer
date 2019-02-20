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
			this.GameStart = true;
		},
		Reset: function(){
			this.GameStart = false;
			this.PlayerHealth = 100;
			this.EnemyHealth = 100;
		}
	}
})
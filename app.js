new Vue({
	el: "#app",
	data:
	{
		GameStart:false,
		PlayerHealth:100,
		EnemyHealth:100,
		EnemyBar: '200px'
	},
	methods:{
		StartGame: function(){
			this.GameStart = true;
		},
		Reset: function(){
			this.GameStart = false;
			this.PlayerHealth = 100;
			this.EnemyHealth = 100;
			this.EnemyBar = "200px";
		},
		Attack: function(){
			const attack_val = Math.floor(Math.random()*10)+1;
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
		},
		SpecialAttack: function(){
			const attack_val = Math.floor(Math.random()*10)+11;
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
		}
	}
})
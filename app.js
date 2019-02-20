new Vue({
	el: "#app",
	data:
	{
		GameStart:false,
		PlayerHealth:100,
		PlayerBar:'200px',
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
			this.PlayerBar = "200px"
			this.EnemyHealth = 100;
			this.EnemyBar = "200px";
		},
		Attack: function(){
			const attack_val = Math.floor(Math.random()*10)+1;
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
			this.EnemyAttack();
		},
		SpecialAttack: function(){
			const attack_val = Math.floor(Math.random()*10)+11;
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
			this.EnemyAttack();
		},
		EnemyAttack: function(){
			const attack_val = Math.floor(Math.random()*20)+1;
			this.PlayerHealth = this.PlayerHealth - attack_val;
			this.PlayerBar = this.PlayerHealth*2 + "px";
		}
	}
})
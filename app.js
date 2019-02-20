new Vue({
	el: "#app",
	data:
	{
		GameStart:false,
		PlayerHealth:100,
		PlayerBar:'200px',
		EnemyHealth:100,
		EnemyBar: '200px',
		GameLog: []
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
			this.GameLog = [];
		},
		Attack: function(){
			const attack_val = Math.floor(Math.random()*10)+1;//Range 1 to 10
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
			const message = "PLAYER HITS ENEMY FOR "+ attack_val +" DAMAGE";
			this.GameLog.unshift(message);
			this.EnemyAttack();
		},
		SpecialAttack: function(){
			const attack_val = Math.floor(Math.random()*10)+11;//Range 11 to 20
			this.EnemyHealth = this.EnemyHealth - attack_val;
			this.EnemyBar = this.EnemyHealth*2 + "px";
			const message = "PLAYER HITS ENEMY FOR "+ attack_val +" DAMAGE";
			this.GameLog.unshift(message);
			this.EnemyAttack();
		},
		Heal:function(){
			const heal_val = Math.floor(Math.random()*6)+15;//Range 15 to 20
			this.PlayerHealth = this.PlayerHealth+ heal_val > 100 ? 100: this.PlayerHealth + heal_val;
			this.PlayerBar = this.PlayerHealth*2 + "px";
			const message = "PLAYER HEALS FOR "+ heal_val;
			this.GameLog.unshift(message);
			this.EnemyAttack();
		},
		EnemyAttack: function(){
			const attack_val = Math.floor(Math.random()*20)+1;//Range 1 to 20
			this.PlayerHealth = this.PlayerHealth - attack_val;
			this.PlayerBar = this.PlayerHealth*2 + "px";
			const message = "ENEMY HITS PLAYER FOR "+ attack_val +" DAMAGE";
			this.GameLog.unshift(message);
		}
	}
})
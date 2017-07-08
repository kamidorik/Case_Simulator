var money = 100.00;
var weapons = [{'name': 'UMP-45 | Corporal', 'picture': 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNF18lwmO7Eu43w2gfnqUc6MjugLdDDd1BrN16E-FTvyenugpPv6ZiYnXo1uHV34yrD30vgsbpsexc//512fx384f', 'price': 0.09},
               {'name':'Negev | Terrain', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51MeSwJgh0YjvMBKdbSsou4Rr9NjM3-tViXdmJ-7IBIUiA6NOEZOUyOYtKTMbXUqSGMw-vuUI8ifJdKZ2B9im63H6_OWdZChTor2tVnOLW76wr3DjKUnQWFg/512fx384f', 'price':0.09},
               {'name':'Tec-9 | Sandstorm', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzRyTRDHAvlhT_Q08Bv4BjU_18tqU9-iyLcHO1u6qtfFO-IsZIkdTJLTC6eDMgGr7EI60aQIepWM8X7rj37pMmYPUxPjqT8a2LjQMJcmpE8/512fx384f', 'price':0.09},
               {'name':'MAG-7 | Heaven Guard', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeTiDzRyTQnDBvdhVPA74g3iNis77893a9u35bwDZ1m-tILEZuF9MY5FF8SFWPGOMAz0u0I7hPIMJpWIpnzv3iW9OmgLWRP1ujVTn5gDvZ0/512fx384f', 'price':0.09},
               {'name':'MAC-10 | Heat', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvPAKMPDMoo8QzkBjMN5M5kXMOJ-7oULlnxsdPBYuIuYdpFHcKECPeFZgz17hg60_MILpCN9Sm81S3tazpZCkbqrnVExrE60SBKWw/512fx384f', 'price':0.40},
               {'name':'SG 553 | Pulse', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oM7bgZghkZzvRBvULD8oq4QT_DBg-4cBrQOi69qkBLBK7sYTCOrAsZNhJS5bQD6OHMlj66Uxr1PRbLpGN9Xjq2Hu4OWgMUxe95Ctazza3vale/512fx384f', 'price':0.43},
               {'name':'FAMAS | Sergeant', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59Ne60IwhmfDvEAK1fT8op8xzTBS414NNcWNak8L5IfF3mtobHZ7QtYdsfHMWBWaDUNAv9ux5q0_VfLZeMo3vpjCXsbGkIDQ2rpDzWyUyVMA/512fx384f', 'price':0.40},
               {'name':'USP-S | Guardian', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhX-AF4Rv8NiI-7cBiWsOJ-7IBIUiA6NOEZOUyNNlKScbQXaXVY1-svxk9gvMIL8OLon_ujyThPmsKWBrqrG8BmrfUuKwr3DioatWxnA/512fx384f', 'price':0.64},
               {'name':'AK-47 | Redline', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhX_o45gnTBS414NNcWNak8L5IfgjmsNCQZ-YoON1JSZTUD_DXZF2vvkIwg_QJL8SLpCm81S28bGYJWw2rpDzip-2Q0g/512fx384f', 'price':5.54},
               {'name':'P90 | Trigon', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2SPrRMVfI1-jfgACA6_PhvVcWx8vVfLwXs4orDOuZ5MYxMHJSGCaPSYAuo70lrhPIMfZaA8X_tiyW4MzgJRVO1rfbRisl0/512fx384f', 'price':2.22},
               {'name':'Nova | Antique', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DzRyTQrNF6FhXfsu_Rn5DBg-4cBrQOi69qkBLBLst4vHZrIsYo5KFpTRC_CFZliv6k49gfcJL8aL9nvu1Cu9OmwCDhfv5Ctaz1mn-C4j/512fx384f', 'price':2.61},
               {'name':'AWP | Asiimov', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfhDCM7_cpcWNak8L5ILF3ot4SXMeMtY95MTcDZCPbSNACpuUo6hvNYfJCLoS3vjn_taDtZUw2rpDytVfjhQg/512fx384f', 'price':25.00},
               {'name':'AUG | Chameleon', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56IeSKMyJYcxHFPqNWXfg_-A3jByY7-sJcWN6x_685JV2t49fYYuQtZNoaGcKEW_KOZwD-6x8w1aNeepXY8iq5j3ntb2lbXRLq-W5Sn_jH5OV5Tktu2Q/512fx384f', 'price':1.46},
               {'name':'Gut Knife', 'picture':'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEgznuShMhtupD_OfDd8Xntsl6p5GliFukBF0Oty-Pj5hdzvFFLQQDfFvp1i8XnRqvJ40BNLu8roAewTrsIrFMrIrN99KF8OGDvCFZVj641V43vZFz08Wzw//512fx384f', 'price':62.83}]
$("#money").text(Math.ceil((money)*100)/100+"$");
$("#sell").hide();
$("#selldis").hide();

function Roll() {
	if (money < 2.75) {
		alert("You don't have enough money!");
	}
	else {
		var run = Math.floor(Math.random() * (101 - 0) + 0)
		if (run <= 55) {
			var ran = Math.floor(Math.random() * (4 - 0) + 0);
		}
		else if ((run > 55) && (run <= 75)) {
			var ran = Math.floor(Math.random() * (8 - 5) + 5);
		}
		else if ((run > 75) && (run <= 95)) {
			var ran = Math.floor(Math.random() * (11 - 8) + 8);
		}
		else if ((run > 95) && (run <= 99)) {
			var ran = Math.floor(Math.random() * (13 - 11) + 11);
		}
		else if (run == 100) {
			var ran = 13;
		}
		var wear = ["Battle-Scarred", "Well-Worn", "Field-Tested", "Minimal Wear", "Factory New"]
		var randwear = Math.floor(Math.random() * wear.length); 
		var randomelem = wear[randwear];
		$("#weaponwear").text(randomelem);
		money = money - 2.75
		$("#money").text(Math.ceil((money)*100)/100+"$");
		$("#weaponname").text(weapons[ran].name);
		$("#weaponimg").attr("src", weapons[ran].picture);
		$("#price").text(weapons[ran].price+"$");
		if ($("#sell").css('display') == 'none'){
			$("#selldis").hide();
			$("#sell").show();
		}
	}
}

function Sell() {
	for (i = 0; i < weapons.length; i++) {
		if ($("#weaponname").text() == weapons[i].name) {
			var weaprice = weapons[i].price;
			break
		}
	}
	money = money + weaprice;
	$("#money").text(Math.ceil((money)*100)/100+"$");
	$("#sell").hide();
	$("#selldis").show();
}


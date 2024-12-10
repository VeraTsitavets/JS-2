/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

/*const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource() {}
} 

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (resource === gold ) {
      this.resources.gold = gold + amount
    } else if ( resource === lumber) {
      this.resources.lumber + amount
    } else if (resource !== gold || resource !== lumber) {
      console.log("Invalid resource");
    }
    addResource(gold, 100)
    addResource(bronze, 100)
  }
  
}

console.log(game.resources); 

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  }

  function addResource(resource, amount) {
    //if (resource === game.gold) {
    //  game.gold += amount
    //}
    const resources = game.resources
    for (const key in resources) {
      if (resource === "gold") {
        game.resource.gold = resource + amount
        
      }
      //addResource(gold, 100)
    }
  }
    addResource("gold", 100) */



/* const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  }

  game.resources.gold = 100 */

  const game = {
    resources: {
      gold: 250,
      lumber: 100,
    },
    addResource(resource, amount) {
      if (this.gold === resource) {
        this.gold = gold + amount
      }else if (this.lumber === resource) {
        this.lumber = lumber + amount
      } else {
        console.log("Invalid resource");
        
      }
    }
    
  } 


  

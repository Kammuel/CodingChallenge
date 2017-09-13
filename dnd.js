$(document).ready(function(){

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!BEGIN JESSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //this defines a myCharacter, which holds race class, stats and points
    //you can use it to keep track of points and update the UI
    function myCharacter(){
      //easy to chance how all stats start to avoid repetive typing later
      var starting_stat=10
      var starting_points=10

      this.race='no_race'
      this.class='no_class'

      this.points=starting_points

      this.strength=starting_stat
      this.charisma=starting_stat
      this.fortitude=starting_stat
      this.intelligence=starting_stat
      this.wisdom=starting_stat
      this.dexterity=starting_stat

    }

    //this function will update all fields in the ui based on
    //the character you pass it
    //'x' should be a myCharacter object, as defined above
    function updateUI(x){
      $("#strength").val(x.strength);
      $("#charisma").val(x.charisma);
      $("#fortitude").val(x.fortitude);
      $("#intelligence").val(x.intelligence);
      $("#wisdom").val(x.wisdom);
      $("#dexterity").val(x.dexterity);
      $("#points").text(x.points);
    }
    var character = new myCharacter();
    //base toon stats are now stored in character
    //and we call updateUI to display base stats
    updateUI(character)

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!END JESSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    $("#race").change(function(){
        var index = $("#race option:selected").index();

        //!!!!!!!START JESSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //made same starting_stat/points here to base stat bonuses off of
        //this can make each condition more uniform and readable
        //this also makes changing the race reset custom point distribution, which can be worked around
        //but meh
        //but also you'd have to figure out the workaround to let users select a class
        var starting_stat=10
        var starting_points=10
        character.points=starting_points
        if(index == 1)
        {
          console.log(character)
          //update all stats to race specifics
          character.strength=starting_stat
          character.charisma=starting_stat
          character.fortitude=starting_stat
          character.intelligence=starting_stat
          character.wisdom=starting_stat
          character.dexterity=starting_stat
          //update UI
          updateUI(character)

        }


        if(index == 2)
        {
          //update all stats to race specifics
          character.strength=starting_stat+2
          character.charisma=starting_stat-2
          character.fortitude=starting_stat
          character.intelligence=starting_stat-2
          character.wisdom=starting_stat
          character.dexterity=starting_stat
          //update UI
          updateUI(character)

            // var num = +$("#strength").val() + 2;
            // $("#strength").val(num);
            // num = +$("#intelligence").val() - 2;
            // $("#intelligence").val(num);
            // num = +$("#charisma").val() -2;
            // $("#charisma").val(num);
            // changeLast(oldIndex);
            // var oldIndex = 2;

        }

        if(index == 3)
        {
          //update all stats to race specifics
          character.strength=starting_stat
          character.charisma=starting_stat
          character.fortitude=starting_stat-2
          character.intelligence=starting_stat
          character.wisdom=starting_stat+2
          character.dexterity=starting_stat
          //update UI
          updateUI(character)

            // var num = +$("#wisdom").val() + 2;
            // $("#wisdom").val(num);
            // num = +$("#constitition").val() - 2;
            // $("#constitution").val(num);
            // changeLast(oldIndex);
            // var oldIndex = 3;

        }

        if(index == 4)
        {
          //update all stats to race specifics
          character.strength=starting_stat
          character.charisma=starting_stat
          character.fortitude=starting_stat+2
          character.intelligence=starting_stat
          character.wisdom=starting_stat
          character.dexterity=starting_stat-2
          //update UI
          updateUI(character)

            // var num = +$("#constitution").val() + 2;
            // $("#wisdom").val(num);
            // num = +$("#dexterity").val() - 2;
            // $("#dexterity").val(num);
            // changeLast(oldIndex);
            // var oldIndex = 4;

        }

        if(index == 5)
        {
          //update all stats to race specifics
          character.strength=starting_stat-2
          character.charisma=starting_stat
          character.fortitude=starting_stat-2
          character.intelligence=starting_stat
          character.wisdom=starting_stat
          character.dexterity=starting_stat+2
          //update UI
          updateUI(character)
            // var num = +$("#dexterity").val() + 2;
            // $("#dexterity").val(num);
            // num = +$("#strength").val() - 2;
            // $("#strength").val(num);
            // num = +$("#constitution").val() - 2;
            // $("#constitution").val(num);
            // changeLast(oldIndex);
            // var oldIndex = 5;

        }

        if(index == 6)
        {
          //update all stats to race specifics
          character.strength=starting_stat
          character.charisma=starting_stat
          character.fortitude=starting_stat-2
          character.intelligence=starting_stat
          character.wisdom=starting_stat
          character.dexterity=starting_stat+2
          //update UI
          updateUI(character)
            // var num = +$("#dexterity").val() + 2;
            // $("#dexterity").val(num);
            // num = +$("#constitution").val() - 2;
            // $("#constitution").val(num);
            // changeLast(oldIndex);
            // var oldIndex = 6;

        }

        //We also don't need this function now
        //less text=human imperceptible load differences

        // function changeLast(oldIndex)
        // {
        //     if(oldIndex == 2)
        //     {
        //         var num = +$("#strength").val() - 2;
        //         $("#strength").val(num);
        //         num = +$("#intelligence").val() + 2;
        //         $("#intelligence").val(num);
        //         num = +$("#charisma").val() + 2;
        //         $("#charisma").val(num);
        //     }
        //
        //     if(oldIndex == 3)
        //     {
        //         var num = +$("#wisdom").val() - 2;
        //         $("#wisdom").val(num);
        //         num = +$("#constitition").val() + 2;
        //         $("#constitution").val(num);
        //     }
        //
        //     if(oldIndex == 4)
        //     {
        //         var num = +$("#constitution").val() - 2;
        //         $("#wisdom").val(num);
        //         num = +$("#dexterity").val() + 2;
        //         $("#dexterity").val(num);;
        //     }
        //
        //     if(oldIndex == 5)
        //     {
        //         var num = +$("#dexterity").val() - 2;
        //         $("#dexterity").val(num);
        //         num = +$("#strength").val() + 2;
        //         $("#strength").val(num);
        //         num = +$("#constitution").val() + 2;
        //         $("#constitution").val(num);
        //     }
        //
        //     if(oldIndex == 6)
        //     {
        //         var num = +$("#dexterity").val() - 2;
        //         $("#dexterity").val(num);
        //         num = +$("#constitution").val() + 2;
        //         $("#constitution").val(num);
        //     }
        //
        // }

    })

    //this next block is a little laggy
    //i think that's a localhost issue, idk though
    //further investigation is required but it's simple logic so it should not
    //lag anything

    $("#strength").change(function(){
      //save the current value of strength now so we dont have to access
      //the DOM more than once
      var x = $("#strength").val()

      //if the new value is higher than the current strength
      //the up arrow was clicked, so they spent a point
      if (x>character.strength){
        console.log('more strength')
        character.strength=x
        character.points--
      }
      //if the new value is lower the the current strength
      //the down arrow was clicked, so the saved a point
      if (x<character.strength){
        console.log('less strength')
        character.strength=x
        character.points++
      }
      updateUI(character)
    })

    $("#charisma").change(function(){
      //save the current value of strength now so we dont have to access
      //the DOM more than once
      var x = $("#charisma").val()

      //if the new value is higher than the current charisma
      //the up arrow was clicked, so they spent a point
      if (x>character.charisma){
        console.log('more charisma')
        character.charisma=x
        character.points--
      }
      //if the new value is lower the the current charisma
      //the down arrow was clicked, so the saved a point
      if (x<character.charisma){
        console.log('less charisma')
        character.charisma=x
        character.points++
      }
      updateUI(character)
    })

    $("#fortitude").change(function(){
      //save the current value of fortitude now so we dont have to access
      //the DOM more than once
      var x = $("#fortitude").val()

      //if the new value is higher than the current fortitude
      //the up arrow was clicked, so they spent a point
      if (x>character.fortitude){
        console.log('more fortitude')
        character.fortitude=x
        character.points--
      }
      //if the new value is lower the the current fortitude
      //the down arrow was clicked, so the saved a point
      if (x<character.fortitude){
        console.log('less fortitude')
        character.fortitude=x
        character.points++
      }
      updateUI(character)
    })

    $("#intelligence").change(function(){
      //save the current value of intelligence now so we dont have to access
      //the DOM more than once
      var x = $("#intelligence").val()

      //if the new value is higher than the current intelligence
      //the up arrow was clicked, so they spent a point
      if (x>character.intelligence){
        console.log('more intelligence')
        character.intelligence=x
        character.points--
      }
      //if the new value is lower the the current intelligence
      //the down arrow was clicked, so the saved a point
      if (x<character.intelligence){
        console.log('less intelligence')
        character.intelligence=x
        character.points++
      }
      updateUI(character)
    })

    $("#wisdom").change(function(){
      //save the current value of wisdom now so we dont have to access
      //the DOM more than once
      var x = $("#wisdom").val()

      //if the new value is higher than the current wisdom
      //the up arrow was clicked, so they spent a point
      if (x>character.wisdom){
        console.log('more wisdom')
        character.wisdom=x
        character.points--
      }
      //if the new value is lower the the current wisdom
      //the down arrow was clicked, so the saved a point
      if (x<character.wisdom){
        console.log('less wisdom')
        character.wisdom=x
        character.points++
      }
      updateUI(character)
    })

    $("#dexterity").change(function(){
      //save the current value of dexterity now so we dont have to access
      //the DOM more than once
      var x = $("#dexterity").val()

      //if the new value is higher than the current dexterity
      //the up arrow was clicked, so they spent a point
      if (x>character.dexterity){
        console.log('more dexterity')
        character.dexterity=x
        character.points--
      }
      //if the new value is lower the the current dexterity
      //the down arrow was clicked, so the saved a point
      if (x<character.dexterity){
        console.log('less dexterity')
        character.dexterity=x
        character.points++
      }
      updateUI(character)
    })

})

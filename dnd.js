$(document).ready(function(){

    
    $("#race").change(function(){
        var index = $("#race option:selected").index();
        
        
        if(index == 2)
        {
            
            var num = +$("#strength").val() + 2;
            $("#strength").val(num);
            num = +$("#intelligence").val() - 2;
            $("#intelligence").val(num);
            num = +$("#charisma").val() -2;
            $("#charisma").val(num);
            changeLast(oldIndex);
            var oldIndex = 2;
            
        }

        if(index == 3)
        {
            
            var num = +$("#wisdom").val() + 2;
            $("#wisdom").val(num);
            num = +$("#constitition").val() - 2;
            $("#constitution").val(num);
            changeLast(oldIndex);
            var oldIndex = 3;
            
        }

        if(index == 4)
        {
            
            var num = +$("#constitution").val() + 2;
            $("#wisdom").val(num);
            num = +$("#dexterity").val() - 2;
            $("#dexterity").val(num);
            changeLast(oldIndex);
            var oldIndex = 4;
            
        }

        if(index == 5)
        {
            var num = +$("#dexterity").val() + 2;
            $("#dexterity").val(num);
            num = +$("#strength").val() - 2;
            $("#strength").val(num);
            num = +$("#constitution").val() - 2;
            $("#constitution").val(num);
            changeLast(oldIndex);
            var oldIndex = 5;
            
        }

        if(index == 6)
        {
            var num = +$("#dexterity").val() + 2;
            $("#dexterity").val(num);
            num = +$("#constitution").val() - 2;
            $("#constitution").val(num);
            changeLast(oldIndex);   
            var oldIndex = 6;    
                 
        }

        function changeLast(oldIndex)
        {
            if(oldIndex == 2)
            {
                var num = +$("#strength").val() - 2;
                $("#strength").val(num);
                num = +$("#intelligence").val() + 2;
                $("#intelligence").val(num);
                num = +$("#charisma").val() + 2;
                $("#charisma").val(num);
            }

            if(oldIndex == 3)
            {
                var num = +$("#wisdom").val() - 2;
                $("#wisdom").val(num);
                num = +$("#constitition").val() + 2;
                $("#constitution").val(num);
            }

            if(oldIndex == 4)
            {
                var num = +$("#constitution").val() - 2;
                $("#wisdom").val(num);
                num = +$("#dexterity").val() + 2;
                $("#dexterity").val(num);;
            }

            if(oldIndex == 5)
            {
                var num = +$("#dexterity").val() - 2;
                $("#dexterity").val(num);
                num = +$("#strength").val() + 2;
                $("#strength").val(num);
                num = +$("#constitution").val() + 2;
                $("#constitution").val(num);
            }

            if(oldIndex == 6)
            {
                var num = +$("#dexterity").val() - 2;
                $("#dexterity").val(num);
                num = +$("#constitution").val() + 2;
                $("#constitution").val(num);
            }

        }

    })

})




$(document).ready(function() {
    $("form#input-list").submit(function(event) {
        event.preventDefault();
        var newList = {listname: "", tasks: []};
        var inputtedListName = $("input#new-list-name").val();

        newList.listname= inputtedListName;

        $("ul#lists").append("<li><span class='list'>" + newList.listname + "</span></li>");

        $("input#new-list-name").val("");

        //CLICK EVENT HANDLER FOR LIST NAMES
        $(".list").last().click(function() {
            $("#show-list").show();
            $("#show-list h2").text(newList.listname);
            $("ul#list-task").text("");

            $("form#added_task").unbind("submit");
            newList.tasks.forEach(function(task){

                $("ul#list-task").append("<li>" + task.taskdescription + "</li>");
                $("input#new-task").val("");
            });


            $("form#added_task").submit(function(event) {
                event.preventDefault();

                var inputtedTask = $("input#new-task").val();

                var newTask = {taskdescription: inputtedTask };
                newList.tasks.push(newTask);

                $("ul#list-task").text("");

                newList.tasks.forEach(function(task){

                    $("ul#list-task").append("<li>" + task.taskdescription + "</li>");
                    $("input#new-task").val("");
                });


            });
        });


    });
});

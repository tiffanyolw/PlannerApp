# Steps to run
1. `npm install` to install dependencies
2. Follow steps in Planner-Server repository to run the backend
3. Update `environment.ts` and `environment.prod.ts` apiUrl if needed
4. `ionic serve` will run app in the browser
5. `ionic cap run android` will run the app on an emulator/physical device

# Fix Errors
- If error with SDK location not found, add a file in android folder named `local.properties` and add `sdk.dir=C:\\Users\\Username\\AppData\\Local\\Android\\sdk` to the file
https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil

# Info
- To Do List page, which should be updated weekly.
- Goals page, which should be updated monthly.
- Achievements page, which will contain all the plans that you have finished in your To Do List and Goals.
- Notes page, where you can add a detailed description of what you completed each week.
- Video diary, which will contain videos that motivate you to work.
- Images diary, which will contain images that motivate you to work.

# Functionality
## To Do
- Will show only incomplete tasks by default
- Will show tasks sorted by created date from latest to oldest
- A toast will appear when checking (or unchecking in Show All list) a task
- When a task is checked, it will still appear in the list, but navigating off and back onto the page
- When a task is checked, the endDate is set to the current date and time
- Show All toggle to show all tasks
- Toggle Show All > Add Task > Close/Submit > Will still show the Show All list
- A task will only show the endDate if the task is completed

### Add Task
- Back button goes back to To Do page
- Validates all fields are required except endDate and endTime, the submit button is disabled if not valid
- Status is Incomplete by defauly
- If endDate and endTime are not specified, Complete cannot be selected as the status
- A toast will appear when adding a task, stating whether the task was successfully added or not
- When Submit button is clicked, the Add Task page automatically closes and shows the To Do page

## Goals
- Same functionality and To Do page

### Add Goal
- Same functionality as Add Task page

## Achievements
- Order by date in descending order (latest to oldest)
- Achievements have a flag icon, tasks have a checkbox icon

## Notes
- Will show notes sorted by updated date from latest to oldest


### Add Note
- Back button goes back to Notes page
- All fields are required, the submit button is disabled if not valid
- A toast will appear when adding a note, stating whether the note was successfully added or not
- When Submit button is clicked, the Add Note page automatically closes and shows the Notes page

# To Do
- Ability to update/edit a task, goal, or note
- Ability to delete a task, goal, or note
  - Set a delete flag and show deleted items in a seperate list when user can permanently delete the item
- Handle error responses from the API (instead of just console.log the error)

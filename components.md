# Movie Robots App

## Data layer

### Data

- Collection of Robots
  - Robot:
    - name: string
    - image: string
    - speed: number
    - resistence: number
    - creationDate : string

### Modifications

- addRobot()
- removeRobot()
- updateRobot()
- loadRobots()
- toggleRobot()

## Components

### Store

#### State

- Collection of Robots

#### RobotsReducer

- addRobot()
- removeRobot()
- updateRobot()
- loadRobots()

### App

- Receives an external collection of Robots
- Receives a collection of Robots
- Receives dispatch()
- Shows the title of the app inside a heading
- Renders a RobotForm
- Renders a RobotsList component

### RobotForm

- State:
  - Robot
- handleSubmit()
- Receives dispatch()
- Receives an optional Robot to update
- Shows an input text for the name of the Robot
- Renders a Button component
  - text: "create" / "modify"
  - actionOnClick: handleSubmit

### RobotsList

- Receives a collection of Robots
- Renders as many RobotCard as Robots are in the collection

### RobotCard

- Receives a Robot
- Receives dispatch()
- handleClick()
- Shows the Robot's name inside a heading
- Shows a check when the received Robot is done
- Renders a Button with:
  - text: "delete"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

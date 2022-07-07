### GENERAL EVENT OBJECT AND METHODS IT CONTAINS ON ITSELF...

- window.onload = function(){ }
- btn.onclick = function(){ }

- btn.addEventListener('click',functionX)
- btn.removeEventListener('click',functionX) // needs to be specified both the event and the function to be removed...

### BUBBLING (CHILD ==> PARENT) AND CAPTURING (PARENT ==> CHILD)

- BY DEFAULT: Set is BUBBLING order: true

        parent.addEventLisener('click',function,false) //third argument indicates whether you want to use CAPTURE or not...

- USING CAPTURING: Set CAPTURING as the first:

        parent.addEventListener('click',function,true)

??? is it neccessary to use capturing from the parent ???

- #### CHANGING PROPAGATION ORDER:
  - to outer event... set to true.... false is default

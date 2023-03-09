const todoList = () => {

	let all = []

	const add = (todoItem) => {

		all.push(todoItem)

	}

	const markAsComplete = (index) => {

		all[index].completed = true

	}

    

	const overdue = () => {

		return all.filter((xyz) => (

			xyz.dueDate < today

		)

		)

	}

    

	const dueToday = () => {

		return all.filter((xyz) => (

			xyz.dueDate === today

		))

	}

    

	const dueLater = () => {

		return all.filter((xyz) => (

			xyz.dueDate > today

		))

	}

  

	const toDisplayableList = (list) => {

		return list.map((item) => {

			if (item.dueDate === today) {

				return `${item.completed ? "[x]" : "[ ]"} ${item.title}`

			} else {

				return `${item.completed ? "[x]" : "[ ]"} ${item.title} ${item.dueDate}`

			}

		}).join("\n")

	}

  

	return {

		all,

		add,

		markAsComplete,

		overdue,

		dueLater,

		toDisplayableList,

		dueToday

	}

}

const formattedDate = d => {

	return d.toLocaleDateString("en-CA")

}

var dateToday = new Date()

const today = formattedDate(dateToday)

module.exports = todoList

  // const { all, add, markAsComplete , overdue, dueLater, dueToday } = todoList()

  // var dateToday = new Date()

  

  // add({ title: 'Pay rent', dueDate: new Date(dateToday.getTime() - 86400000).toLocaleDateString("en-CA"), completed: false })

  // add({ title: 'Service Vehicle', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })

  // add({ title: 'File taxes', dueDate: new Date().toLocaleDateString("en-CA"), completed: false })

  // add({ title: 'Pay electric bill', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })

  // add({ title: 'Submit assignment', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })

  // console.log(all)

  // ####################################### #

  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #

  // ####################################### #

  

  

  

  // const Today = new Date().toLocaleDateString("en-CA")

  // const yesterday = new Date(dateToday.getTime() - 86400000).toLocaleDateString("en-CA")

  // const tomorrow = new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA")

  

  // const { all, add, markAsComplete , overdue, dueLater, dueToday } = todoList()

  

  // add([{ title: 'Submit assignment', dueDate: yesterday, completed: false }])

  // add([{ title: 'Pay rent', dueDate: yesterday, completed: false }])

  // add([{ title: 'Service Vehicle', dueDate: tomorrow, completed: false }])

  // add([{ title: 'File taxes', dueDate: Today, completed: false }])

  // add([{ title: 'Pay electric bill', dueDate: tomorrow, completed: false }])

  // console.log(dueToday)



// const todos = todoList();

  

// const formattedDate = d => {

//   return d.toLocaleDateString("en-CA")

// }



// var dateToday = new Date()

// const today = formattedDate(dateToday)

// const yesterday = formattedDate(

//   new Date(new Date().setDate(dateToday.getDate() - 1))

// )

// const tomorrow = formattedDate(

//   new Date(new Date().setDate(dateToday.getDate() + 1))

// )



// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })

// todos.add({ title: 'Pay rent', dueDate: today, completed: true })

// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })

// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })

// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })



// console.log("My Todo-list\n")



// console.log("Overdue")

// var overdues = todos.overdue()

// var formattedOverdues = todos.toDisplayableList(overdues)

// console.log(formattedOverdues)

// console.log("\n")



// console.log("Due Today")

// let itemsDueToday = todos.dueToday()

// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)

// console.log(formattedItemsDueToday)

// console.log("\n")



// console.log("Due Later")

// let itemsDueLater = todos.dueLater()

// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)

// console.log(formattedItemsDueLater)

// console.log("\n\n")


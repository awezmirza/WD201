const todoList = require("../todo")
const { all, add, markAsComplete, overdue, dueLater, dueToday } = todoList()

describe("Todolist Test Suite", () => {
	beforeAll(() => {
		var dateToday = new Date()
		add({ title: "File taxes", dueDate: new Date().toLocaleDateString("en-CA"), completed: false })
		add({ title: "Pay rent", dueDate: new Date(dateToday.getTime() - 86400000).toLocaleDateString("en-CA"), completed: false })
		add({ title: "Service Vehicle", dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
		add({ title: "Pay electric bill", dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
		add({ title: "Submit assignment", dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
	})
	test("Adding New test", () => {
		const itemscount = all.length
		add(
			{
				title: "Test", completed: false, dueDate: new Date().toLocaleDateString("en-CA")
			}
		)
		expect(all.length).toBe(itemscount + 1)
	})
	test("Mark as complete", () => {
		expect(all[0].completed).toBe(false)
		markAsComplete(0)
		expect(all[0].completed).toBe(true)
	})
	test("Overdue wala", () => {
		expect(overdue().length).toBe(0)
	})
	test("Due Later", () => {
		expect(dueLater().length).toBe(4)
	})
	test("Due Today", () => {
		expect(dueToday().length).toBe(2)
	})
})
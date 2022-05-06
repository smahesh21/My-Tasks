import {Component} from 'react'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {activeOptionId: ''}

  renderFromSection = () => {
    const {activeOptionId} = this.state
    return (
      <form>
        <label htmlFor="task" className="label-element">
          Task
        </label>
        <input id="task" className="input-element" placeholder="Create Task" />
        <select className="select-element">
          {tagsList.map(eachOption => (
            <option key={eachOption.optionId}>{eachOption.displayText}</option>
          ))}
        </select>
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    )
  }

  renderCreateTaskSection = () => (
    <div className="create-task-container">
      <div className="responsive-container">
        <h1 className="heading">Create a Task!</h1>
        {this.renderFromSection()}
      </div>
    </div>
  )

  renderDisplayTasksSection = () => {
    const {activeOptionId} = this.state
    return (
      <div className="display-tasks-container">
        <h1 className="tags">Tags</h1>
        <ul className="tags-list">
          {tagsList.map(eachTag => (
            <li key={eachTag.optionId}>
              <button className="tag-button">{eachTag.displayText}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <div className="my-tasks-container">My Tasks</div>
  }
}

export default MyTasks

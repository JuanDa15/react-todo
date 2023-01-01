import React, { Fragment } from "react"

export const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <Fragment>
      <h1>Has completado {completedTodos} de {totalTodos} TODO's</h1>
    </Fragment>
  )
}
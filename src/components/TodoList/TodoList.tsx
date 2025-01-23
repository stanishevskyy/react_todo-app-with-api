import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

type Props = {
  filteredTodos: Todo[];
  tempTodo: Todo | null;
  isLoading: boolean;
  loadingByIds: number[];
  onDelete: (value: number) => Promise<void>;
};

export const TodoList: React.FC<Props> = ({
  filteredTodos,
  tempTodo,
  isLoading,
  loadingByIds,
  onDelete,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          isLoading={isLoading}
          loadingByIds={loadingByIds.includes(todo.id)}
        />
      ))}
      {tempTodo && (
        <TodoItem key={tempTodo.id} todo={tempTodo} isLoading={isLoading} />
      )}
    </section>
  );
};

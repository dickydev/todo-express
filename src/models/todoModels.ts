import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'todos',
  timestamps: true, // Enable timestamps if you want createdAt and updatedAt columns
})
export class Todo extends Model<Todo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  task!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  completed!: boolean;
}

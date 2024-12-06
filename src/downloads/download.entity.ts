import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity'; // Assuming User entity is in the same directory.
import { Product } from '../products/product.entity'; // Assuming Product entity is in the same directory.

@Entity({ name: 'downloads' })
export class Download {
  @PrimaryGeneratedColumn('uuid') // Unique identifier for the download record using UUID.
  id: string;

  @ManyToOne(() => User, { nullable: false }) // Foreign key to the users table.
  @JoinColumn({ name: 'user_id' }) // Linking to the user who downloaded the product.
  user: User;

  @ManyToOne(() => Product, { nullable: false }) // Foreign key to the products table.
  @JoinColumn({ name: 'product_id' }) // Linking to the product that was downloaded.
  product: Product;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Timestamp when the product was downloaded.
  downloaded_at: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Timestamp when the record was created.
  created_at: Date;
}
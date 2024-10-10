// import { Types, Document } from 'mongoose'

// export interface TComment {
//     commenter: Types.ObjectId
//   createdAt?: Date;
// }

// export interface TAuthor {
//   _id: Types.ObjectId;
//   email: string;
// }

// export interface TPost extends Document {
//   _id: Types.ObjectId;
//   title: string;
//   content: string;
//   image?: string[];
//   tags: 'premium' | 'everyone';
//   upVotes: number;
//   downVotes: number;
//   author: Types.ObjectId | TAuthor ;
//   comments?: TComment[];
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// export interface TPopulatedPost extends Omit<TPost, 'author'> {
//   author: TAuthor 
// }



import { Types } from 'mongoose'

export interface TComment {
  userId: string
  name: string
  commenter: Types.ObjectId
  content: string
}
export interface TPost {
  title: string
  content: string
  image?: string[]
  tags: 'premium' | 'everyone'
  comments?: TComment[]
  upVotes?: number
  downVotes?: number
  author: Types.ObjectId
}
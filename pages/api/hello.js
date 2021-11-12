// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from 'lib/connectDB'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const blogs = await client.db().collection('blogs').find().toArray()
    res.status(200).json({ name: 'John Doe', blogs })
  } catch (error) {
    res.status(200).json({ message: 'Something wrong happened' })
  }
}

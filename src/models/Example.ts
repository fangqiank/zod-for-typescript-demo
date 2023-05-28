import {z} from 'zod'

const mySchema = z.string()

mySchema.parse('zhangsan')
mySchema.parse(42)

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse('zhangsan') // => { success: true; data: "zhangsan" }
mySchema.safeParse(42) // => { success: false; error: ZodError }

const schema = z.coerce.string() //coerce强制转换
schema.parse('zhangsan')
schema.parse(42)
schema.parse(true)
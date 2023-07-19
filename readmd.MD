Models

- Lure
> name: string
> lureType: string | enum []
> bestUsedFor: string
> 


- Line
> tencelStr: string
> gauge: number | string
> knotType: string

- Combo
> Lure: ObjectId
> Line: ObjectId

- User
> email
> password
> combos: [ObjectId]


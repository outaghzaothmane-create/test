export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Sneakers', value: 'Sneakers' },
                    { title: 'Boots', value: 'Boots' },
                    { title: 'Sandals', value: 'Sandals' },
                    { title: 'Accessories', value: 'Accessories' }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'S', value: 'S' },
                    { title: 'M', value: 'M' },
                    { title: 'L', value: 'L' },
                    { title: 'XL', value: 'XL' }
                ]
            }
        },
        {
            name: 'inStock',
            title: 'In Stock',
            type: 'boolean',
            initialValue: true
        }
    ]
}

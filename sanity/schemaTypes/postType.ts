import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" },
        }),
        defineField({
            name: "mainImage",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        }),
        defineField({
            name: "categories",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: { type: "category" },
                }),
            ],
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alernative Text",
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});

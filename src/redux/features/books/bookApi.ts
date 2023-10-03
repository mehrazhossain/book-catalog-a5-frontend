import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getBooks: builder.query({
            query: (params) => {
                const { searchTerm, genre, publicationYear } = params;
                let url = `books/?searchTerm=${searchTerm}`;

                if (genre) {
                    url = `books/?searchTerm=${searchTerm}&genre=${genre}`;
                }

                if (publicationYear) {
                    url = `books/?searchTerm=${searchTerm}&publicationYear=${publicationYear}`;
                }

                return url;
            },
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
            providesTags: ['reviews']
        }),
        getBook: builder.query({
            query: () => `books/`,
        }),
        editBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `books/${id}`,
                method: 'PATCH',
                body: JSON.stringify(updatedData),
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`,

                }
            }),
        }),
        addReview: builder.mutation({
            query: ({ id, review }) => ({
                url: `reviews/create-review/${id}`,
                method: 'POST',
                body: (review),
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`,

                }
            }),
            invalidatesTags: ['reviews']
        }),
        addNewBook: builder.mutation({
            query: (data) => ({
                url: `books/create-book`,
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`,

                }
            }),
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`,
                }
            }),
        })

    })
})

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useEditBookMutation,
    useDeleteBookMutation,
    useAddNewBookMutation,
    useAddReviewMutation,
    useGetBookQuery
} = bookApi;


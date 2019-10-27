function normPostList (list) {
    console.log(list);
    return Object.values(list).reduce((sum, post) => {
        return {
            ...sum,
            [post.id]: { ...post }
        };
    }, {});
}

export { normPostList };

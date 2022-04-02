const jsonFetcher = async (rootUrl) => {
    const filesResponse = await fetch(`${rootUrl}/dir.json`);
    const files = await filesResponse.json();
    return files
}

const imageTxtFetcher = async (rootUrl) => {
    const filesResponse = await fetch(`${rootUrl}/dir_jpg.txt`);
    const filesString = await filesResponse.text();
    return filesString.split('\n')
}

const createLoadImages = (fetcher) => async (dirUrl) => {
    const files = await fetcher(dirUrl)

    // const isImage = (str) => str.endsWith(".png");
    const makeThumb = (filename) => `the-archive/thumbs/${filename.replace(/JPG$/, 'png')}`;
    const makeAbsolute = (filename) => `${dirUrl}/${filename}`;

    // Question - Should thumb be contained as part of dir JSON? Would be good as file extension may change - client would not have to guess.
    // const images = files.filter(isImage);
    return paths = files
            .map(makeThumb)
            .map(makeAbsolute);
}

const loadImages = createLoadImages(imageTxtFetcher)

module.exports = { loadImages }
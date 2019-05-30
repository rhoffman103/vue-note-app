import API from './API';

export default {
    fetchNotes () {
        return API().get('posts');
    }
};
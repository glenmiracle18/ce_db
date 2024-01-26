import mongoose from "mongoose";
// the main resource schema from the database
const resourceSchema = mongoose.Schema({
    research_topic: String,
    research_countries: String,
    publication_title: String,
    direct_url :String,
    publication_type: String,
    authors: String,
    year: String,
    keyword: String,
})
// initialising the resource schema ready for use
export default mongoose.model('main_data', resourceSchema);

const express=require('express');
const authorsRouter=express.Router();
function router(nav)
{
    var authors=[
        {
            name:'R K NARAYAN',
            role:'Writer',
            awards:'Filmfare Award for Best Story, Padma Bhushan, Padma Vibhushan',
            img:"author6.jpg",
            description:"Rasipuram Krishnaswami Iyer Narayanaswami, commonly known as R. K. Narayan, was an Indian writer known for his work set in the fictional South Indian town of Malgudi. He was a leading author of early Indian literature in English along with Mulk Raj Anand and Raja Rao."
        },
        {
           name:'Ruskin Bond',
           role:'Writer,Poet',
            awards:'Sahitya Academy Award,Padmasree,Padmabhooshan',
            img:"author7.jpg",
            description:"Ruskin Bond (born 19 May 1934) is an Indian author of British descent. He lives with his adopted family in Landour, Mussoorie, India. The Indian Council for Child Education has recognised his role in the growth of children's literature in India. He was awarded the Sahitya Academy Award in 1992 for Our Trees Still Grow in Dehra, his novel in English. He was awarded the Padma Shri in 1999 and the Padma Bhushan in 2014."
        },
        {
            name:'ARUNDHATHI ROY',
            role:'Writer,Activist',
            awards:'Booker Prize,National Film Award for Best Screenplay',
            img:"author5.jpg",
            description:"Suzanna Arundhati Roy (born 24 November 1961)is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author. She is also a political activist involved in human rights and environmental causes."
        },
        {
           name:'AMISH TRIPATHI',
           role:'Film Producer,Columnist,Author',
            awards:'Kalinga International Literary Award',
            img:"author4.jpg",
            description:"Amish Tripathi (born 18 October 1974) is the Director of the Nehru Centre in London and a columnist, and author. He is very well known for his books The Immortals of Meluha, The Secret of the Nagas, The Oath of the Vayuputras, Scion of Ikshvaku, Sita: Warrior of Mithila, Raavan: Enemy of Aryavarta and Legend of Suheldev: The King Who Saved India. The Shiva Trilogy was the fastest-selling book series in Indian publishing history while the Ram Chandra Series was the second fastest-selling book series in Indian publishing history. In 2017, Tripathi launched his first non-fiction book, Immortal India."
        },
        {
            name:'APJ ABDUL KALAM',
            role:'Aerospace Scientist,Author',
            awards:'Padma Vibhushan, Padma Bhushan,  Bharat Ratna ',
            img:"author9.jpg",
            description:"Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and politician who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts."
        }
        
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,button:'Donate',title:'LibraryApp',heading:'LIBRARY',authors
    
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",{
            nav,button:'Donate',title:'LibraryApp',heading:'LIBRARY',
           author:authors[id]
        });
        
    });
   
    return authorsRouter;
}

module.exports = router;
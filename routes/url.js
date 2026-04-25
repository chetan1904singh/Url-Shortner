import express from 'express'
import { genShortUrl ,getAanalytics,redirect} from '../controllers/url.js';

const router=express.Router();

router.post('/',genShortUrl)
router.get('/analytics/:shortId',getAanalytics)
router.get('/:shortId',redirect)
export default router
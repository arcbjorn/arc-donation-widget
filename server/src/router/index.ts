import Router from 'koa-router';
import DonationController from '../controllers/donation.controller';

const router = new Router();

router.get('/donation', DonationController.record);

export default router;

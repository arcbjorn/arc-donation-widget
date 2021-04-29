import Router from 'koa-router';
import DonationController from '../controllers/donation.controller';

const router = new Router();

router.post('/donation', DonationController.record);

router.get('/donations', DonationController.all);

export default router;

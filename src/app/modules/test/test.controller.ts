import { TestServices } from './test.service';
import { sendSuccessResponse } from '../../utils/sendSuccessResponse';
import { catchAsync } from '../../utils/catchAsync';

// Create test collection controller
const createTestCollection = catchAsync(async (req, res) => {
  // Payload data
  const payload = await req.body;

  // Call test service
  const collection = await TestServices.createTestCollection(payload);

  // Send success response
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Test collection created successfully',
    data: collection,
  });
});

export const TestControllers = {
  createTestCollection,
};

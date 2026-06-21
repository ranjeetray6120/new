import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Dashboard')
@Controller('dashboard')
export class DashboardController {
  @UseGuards(JwtAuthGuard)
  @Get('stats')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get dashboard statistics' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard statistics retrieved successfully.',
    schema: {
      type: 'object',
      properties: {
        totalProducts: { type: 'number', example: 100 },
        totalCategories: { type: 'number', example: 8 },
        totalBrands: { type: 'number', example: 6 },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized. Invalid or missing token.' })
  getStats() {
    return {
      totalProducts: 100,
      totalCategories: 8,
      totalBrands: 6,
    };
  }
}

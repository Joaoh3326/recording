import { Module } from '@nestjs/common';
import { ContentController } from './http/rest/controller/content.controller';
import { PrismaService } from './persistence/prisma/prisma.service';
import { ContentManagmentService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { VideoDAO as VideoDAOImpl } from './persistence/dao/video.dao';
import { VideoDAO } from './core/dao/video.dao.interface';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [
    PrismaService,
    ContentManagmentService,
    MediaPlayerService,
    { provide: VideoDAO, useClass: VideoDAOImpl },
  ],
})
export class AppModule {}

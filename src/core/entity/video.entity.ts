import { randomUUID } from 'node:crypto';
import { BaseEntity, BaseEntityProps } from './base.entity';

export type NewVideoEntity = Omit<
  VideoEntityProps,
  'id' | 'createdAt' | 'updatedAt'
>;

export interface VideoEntityProps extends BaseEntityProps {
  url: string;
  sizeInKb: number;
  duration: number;
}

export class VideoEntity extends BaseEntity {
  private url: VideoEntityProps['url'];
  private sizeInKb: VideoEntityProps['sizeInKb'];
  private duration: VideoEntityProps['duration'];

  private constructor(data: VideoEntityProps) {
    super(data);
  }

  static createNew(data: NewVideoEntity, id = randomUUID()): VideoEntity {
    return new VideoEntity({
      id,
      url: data.url,
      sizeInKb: data.sizeInKb,
      duration: data.duration,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static createFrom(data: VideoEntityProps): VideoEntity {
    return new VideoEntity({
      id: data.id,
      url: data.url,
      sizeInKb: data.sizeInKb,
      duration: data.duration,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }
}

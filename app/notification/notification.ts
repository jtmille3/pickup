export enum NotificationType {
    Info,
    Success,
    Danger,
    Warning
}

export class Notification {
  notificationId:number;
  title:string;
  type:NotificationType;
}

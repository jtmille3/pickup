export enum NotificationType {
    Info,
    Success,
    Danger,
    Warning
}

export class Notification {
  notificationId:number;
  text:string;
  type:NotificationType;
}
